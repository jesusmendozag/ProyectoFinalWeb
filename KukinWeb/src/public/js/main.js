document.documentElement.classList.add('js');
try { if (localStorage.getItem('kukin-sin-movimiento') === '1') document.documentElement.classList.add('no-motion'); } catch (e) {}

function iniciarKukin() {
  var root = document.documentElement;
  var navbar = document.querySelector('.navbar');
  var btn = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Menú móvil
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var abierto = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
  }

  // Marca los elementos que aparecen al hacer scroll (no hace falta editar las vistas)
  ['.section-head', '.panel', '.card', '.cta-band', '.download-card', '.contact-form', '.steps li']
    .forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { el.setAttribute('data-reveal', ''); });
    });

  // Elementos flotantes del hero
  var visual = document.querySelector('.hero-visual');
  if (visual) {
    var orb = ['🍅', '🥑', '🌶️', '🌽', '🍋', '🌿'].map(function (e, i) {
      return '<span style="--a:' + i + '"><i>' + e + '</i></span>';
    }).join('');
    visual.insertAdjacentHTML('afterbegin',
      '<div class="orbit" aria-hidden="true">' + orb + '</div><span class="sticker s3">Cero desperdicio</span>');
  }

  // Segunda banda (platillos), en sentido contrario (solo en el inicio)
  var banda = document.querySelector('.marquee');
  if (banda) {
    var platos = ['Chilaquiles', 'Pozole', 'Tinga', 'Enchiladas', 'Mole', 'Sopa de tortilla', 'Tacos al pastor', 'Caldo de pollo'];
    var pista = platos.concat(platos).map(function (x) { return '<span>' + x + '</span>'; }).join('');
    banda.insertAdjacentHTML('afterend',
      '<div class="marquee rev" aria-hidden="true"><div class="marquee-track">' + pista + '</div></div>');
  }

  // Ingredientes que suben en la banda final
  var cta = document.querySelector('.cta-band');
  if (cta) {
    ['🍅', '🥑', '🌶️', '🍋', '🌽', '🌿'].forEach(function (e, i) {
      cta.insertAdjacentHTML('beforeend', '<span class="drift" aria-hidden="true" style="--x:' + (6 + i * 16) + '%;--d:' + (i * 1.5) + 's">' + e + '</span>');
    });
  }

  // Botón para pausar animaciones
  var pie = document.querySelector('.footer-bottom');
  var t = null;
  if (pie) {
    t = document.createElement('button');
    t.type = 'button';
    t.className = 'motion-toggle';
    pie.appendChild(t);
    var pintar = function () {
      var off = root.classList.contains('no-motion');
      t.textContent = off ? 'Activar animaciones' : 'Pausar animaciones';
      t.setAttribute('aria-pressed', off ? 'true' : 'false');
    };
    pintar();
    t.addEventListener('click', function () {
      var off = root.classList.toggle('no-motion');
      try { localStorage.setItem('kukin-sin-movimiento', off ? '1' : '0'); } catch (e) {}
      pintar();
    });
  }

  // Barra de progreso y sombra de la barra al hacer scroll
  var bar = document.createElement('div');
  bar.className = 'progress';
  if (navbar) navbar.appendChild(bar);
  function onScroll() {
    var max = document.body.scrollHeight - window.innerHeight;
    root.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(3) : 0);
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Aparición escalonada al entrar en pantalla
  var items = document.querySelectorAll('[data-reveal]');
  items.forEach(function (el) {
    var n = 0, s = el.previousElementSibling;
    while (s && n < 5) { if (s.hasAttribute('data-reveal')) n++; s = s.previousElementSibling; }
    el.style.setProperty('--i', n);
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Bandas de texto: avanzan siempre y se aceleran (o invierten) con el scroll
  var bandas = Array.prototype.map.call(document.querySelectorAll('.marquee'), function (m) {
    var tr = m.querySelector('.marquee-track');
    return { m: m, tr: tr, n: tr.children.length / 2, dir: m.classList.contains('rev') ? 1 : -1, x: 0, hover: false };
  });
  function periodo(b) { return b.tr.children[b.n].offsetLeft - b.tr.children[0].offsetLeft; }
  function llenar() {
    bandas.forEach(function (b) {
      var p = periodo(b);
      while (p > 0 && b.tr.scrollWidth < window.innerWidth + p) {
        for (var i = 0; i < b.n; i++) b.tr.appendChild(b.tr.children[i].cloneNode(true));
      }
    });
  }
  if (bandas.length) {
    bandas.forEach(function (b) {
      b.m.addEventListener('mouseenter', function () { b.hover = true; });
      b.m.addEventListener('mouseleave', function () { b.hover = false; });
    });
    llenar();
    window.addEventListener('resize', llenar);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(llenar);
    var vel = 0, ultimaY = window.scrollY, antes = performance.now();
    var paso = function (ahora) {
      var dt = Math.min(ahora - antes, 50) / 1000; antes = ahora;
      var dy = window.scrollY - ultimaY; ultimaY = window.scrollY;
      var objetivo = (reduce || dt <= 0) ? 0 : Math.max(-900, Math.min(900, dy / dt * 0.4));
      vel += (objetivo - vel) * 0.12;
      var pausa = root.classList.contains('no-motion');
      bandas.forEach(function (b) {
        var p = periodo(b);
        if (!pausa && !b.hover && p > 0) {
          b.x += b.dir * (70 + vel) * dt;
          b.x = ((b.x % p) - p) % p;
        }
        b.tr.style.transform = 'translate3d(' + b.x + 'px,0,0)';
      });
      requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  }

  // Inclinación suave del teléfono con el mouse (solo escritorio)
  var phone = document.querySelector('.phone');
  if (visual && phone && !reduce && window.matchMedia('(hover: hover)').matches) {
    visual.addEventListener('mousemove', function (e) {
      var r = visual.getBoundingClientRect();
      phone.style.setProperty('--tx', ((e.clientX - r.left) / r.width - 0.5) * 18 + 'px');
      phone.style.setProperty('--ty', ((e.clientY - r.top) / r.height - 0.5) * 18 + 'px');
    });
    visual.addEventListener('mouseleave', function () {
      phone.style.setProperty('--tx', '0px');
      phone.style.setProperty('--ty', '0px');
    });
  }
}

// El script va al final del <body>, así que el contenido ya existe
if (document.querySelector('.footer')) iniciarKukin();
else document.addEventListener('DOMContentLoaded', iniciarKukin);
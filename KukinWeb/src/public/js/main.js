/* ═══════════════════════════════════════════════════════════
   Kukin · interacciones y animaciones
   - Sin GSAP o sin movimiento, todo el contenido queda visible.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var motion = function () { return root.classList.contains('motion'); };
  var lenis = null;

  function listo() { root.classList.add('listo'); }

  /* ── Menú móvil ─────────────────────────────────── */
  var btn = $('.nav-toggle');
  var menu = $('#menu');
  if (btn && menu) {
    var cerrar = function () { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Abrir menú'); };
    btn.addEventListener('click', function () {
      var abierto = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      btn.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { cerrar(); btn.focus(); } });
  }

  /* ── Cabeceras internas: stickers y banda ───────── */
  var cab = $('.page-head');
  if (cab) {
    cab.insertAdjacentHTML('beforeend',
      '<span class="sticker ph ph1" aria-hidden="true">🥑</span><span class="sticker ph ph2" aria-hidden="true">🌿</span><span class="sticker ph ph3" aria-hidden="true">🍋</span>');
    var ingr = ['Jitomate', 'Chile poblano', 'Frijoles', 'Tortillas', 'Cilantro', 'Aguacate', 'Limón', 'Queso fresco', 'Epazote', 'Nopales'];
    cab.insertAdjacentHTML('afterend', '<div class="marquee" aria-hidden="true"><div class="marquee-track">' +
      ingr.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div></div>');
  }

  /* ── Marca elementos que aparecen al hacer scroll ─ */
  [
    '.story-intro .lead', '.hfeat-head .link-arrow', '.recetario-head p', '.tabs', '.tab-panel',
    '.faq-grid .lead', '.faq-grid .link-arrow', '.faq details', '.naat-copy .lead', '.naat-card',
    '.feat-em', '.feat-copy .lead', '.feat-copy .ticks li', '.tl-body', '.dl-card', '.contact-copy .lead',
    '.contact-copy .ticks li', '.contact-place', '.form-card', '.jump', '.cierre p', '.cierre .cta-group'
  ].forEach(function (sel) { $$(sel).forEach(function (el) { el.setAttribute('data-reveal', ''); }); });
  $$('.feat-visual').forEach(function (el) { el.setAttribute('data-reveal', 'wipe'); });

  $$('[data-reveal]').forEach(function (el) {
    var n = 0, s = el.previousElementSibling;
    while (s && n < 6) { if (s.hasAttribute('data-reveal')) n++; s = s.previousElementSibling; }
    el.style.setProperty('--i', n);
  });

  function revelarTodo() { $$('[data-reveal]').forEach(function (el) { el.classList.add('in'); }); }
  if ('IntersectionObserver' in window && motion()) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    $$('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    revelarTodo();
  }

  /* ── Frases que se iluminan palabra por palabra ── */
  var frases = $$('.scrub-words').map(function (el) {
    var palabras = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.innerHTML = palabras.map(function (w) { return '<span class="w" aria-hidden="true">' + w + '</span>'; }).join(' ');
    return { el: el, ws: $$('.w', el), resp: el.parentNode.querySelector('.dolor-resp') };
  });
  frases.forEach(function (f) { if (f.resp) f.resp.setAttribute('data-pop', ''); });

  /* ── Teléfono fijo que cambia de pantalla ───────── */
  var track = $('.story-track');
  var story = null;
  if (track) {
    story = {
      steps: $$('.story-step', track),
      dots: $$('.story-dots i', track),
      screens: $$('.phone-story .screen', track),
      idx: -1
    };
  }

  function animarBarras(screen) {
    if (!motion() || !screen.animate) return;
    $$('.sc-bar i', screen).forEach(function (b, i) {
      b.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 900, delay: 250 + i * 90, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
    });
    $$('.pantry li, .rc, .ls li, .step-card, .ck-actions, .sc-suggest', screen).forEach(function (el, i) {
      el.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 650, delay: 120 + i * 60, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
    });
  }

  function activarPaso(i) {
    if (!story || i === story.idx) return;
    var prev = story.idx;
    story.idx = i;
    story.steps.forEach(function (s, k) { s.classList.toggle('is-active', k === i); s.setAttribute('aria-current', k === i ? 'step' : 'false'); });
    story.dots.forEach(function (d, k) { d.classList.toggle('on', k <= i); });
    story.screens.forEach(function (sc, k) {
      sc.classList.remove('was-on');
      if (k === prev) sc.classList.add('was-on');
      sc.classList.toggle('is-on', k === i);
    });
    var scr = story.screens[i];
    if (scr && prev !== -1) animarBarras(scr);
  }

  /* ── Temporizador de la pantalla de cocina ──────── */
  var timers = $$('.js-timer');
  var segs = 600;
  if (timers.length) {
    setInterval(function () {
      if (!motion()) return;
      segs = segs <= 0 ? 600 : segs - 1;
      var t = Math.floor(segs / 60) + ':' + String(segs % 60).padStart(2, '0');
      timers.forEach(function (el) { el.textContent = t; });
    }, 1000);
  }

  /* ── Línea de tiempo ────────────────────────────── */
  var timeline = $('.timeline');

  /* ── Scroll: barra de progreso, frases, historia, línea ── */
  var navbar = $('.navbar');
  var bar = document.createElement('div');
  bar.className = 'progress';
  if (navbar) navbar.appendChild(bar);

  function onScroll() {
    var y = window.scrollY, vh = window.innerHeight;
    var max = document.documentElement.scrollHeight - vh;
    root.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
    if (navbar) navbar.classList.toggle('scrolled', y > 10);

    frases.forEach(function (f) {
      var r = f.el.getBoundingClientRect();
      var p = (vh * 0.82 - r.top) / (r.height + vh * 0.3);
      p = Math.max(0, Math.min(1, p));
      var n = Math.round(p * f.ws.length);
      f.ws.forEach(function (w, k) { w.classList.toggle('on', k < n); });
      if (f.resp && p >= 0.98) f.resp.classList.add('pop');
    });

    if (story && story.steps.length) {
      var r2 = track.getBoundingClientRect();
      var stage = track.querySelector('.story-stage');
      var recorrido = r2.height - stage.offsetHeight;
      var prog = recorrido > 0 ? (-r2.top) / recorrido : 0;
      var i = Math.max(0, Math.min(story.steps.length - 1, Math.floor(prog * story.steps.length)));
      activarPaso(i);
    }

    if (timeline) {
      var r3 = timeline.getBoundingClientRect();
      var p3 = (vh * 0.6 - r3.top) / r3.height;
      p3 = Math.max(0, Math.min(1, p3));
      timeline.style.setProperty('--tl', p3.toFixed(4));
      $$('li', timeline).forEach(function (li) {
        li.classList.toggle('lit', li.getBoundingClientRect().top < vh * 0.6);
      });
    }

    $$('[data-reveal]:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('in');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ── Pestañas (estudiante / mamá) ───────────────── */
  var tablist = $('.tabs');
  if (tablist) {
    var tabs = $$('[role="tab"]', tablist);
    var ink = $('.tab-ink', tablist);
    var moverTinta = function () {
      var sel = $('[aria-selected="true"]', tablist);
      if (!sel || !ink) return;
      ink.style.width = sel.offsetWidth + 'px';
      ink.style.transform = 'translateX(' + sel.offsetLeft + 'px)';
    };
    var elegir = function (tab, enfocar) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        if (on) {
          panel.hidden = false;
          panel.classList.add('in');
          if (motion()) { panel.classList.remove('entering'); void panel.offsetWidth; panel.classList.add('entering'); }
        } else {
          panel.hidden = true;
        }
      });
      if (enfocar) tab.focus();
      moverTinta();
    };
    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () { elegir(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(k + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(k - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); elegir(n, true); }
      });
    });
    moverTinta();
    window.addEventListener('resize', moverTinta);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moverTinta);
  }

  /* ── Demo interactiva: ¿qué tienes en tu cocina? ── */
  var demo = $('.demo');
  if (demo) {
    var chips = $$('.dchip', demo);
    var lista = $('.demo-list', demo);
    var nombres = {};
    chips.forEach(function (c) { nombres[c.getAttribute('data-ing')] = c.getAttribute('data-nombre'); });
    var recs = $$('.drec', demo).map(function (li, k) {
      return {
        li: li, k: k, ings: li.getAttribute('data-ings').split(','),
        pctEl: li.querySelector('.drec-pct'), bar: li.querySelector('.sc-bar i'),
        falta: li.querySelector('.drec-falta'), pct: parseInt(li.querySelector('.drec-pct').textContent, 10) || 0, faltan: []
      };
    });
    var carrito = [];
    var cartBox = $('.demo-cart', demo);
    var cartItems = $('.demo-cart-items', demo);
    var cartN = $('.js-cart-n', demo);
    var VISIBLES = 6;

    var contar = function (el, de, a) {
      if (!motion() || de === a) { el.textContent = a + '%'; return; }
      var t0 = performance.now();
      (function f(t) {
        var p = Math.min(1, (t - t0) / 600);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(de + (a - de) * e) + '%';
        if (p < 1) requestAnimationFrame(f);
      })(t0);
    };

    var pintar = function (animar) {
      var tengo = chips.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; }).map(function (c) { return c.getAttribute('data-ing'); });
      $('.js-count', demo).textContent = tengo.length;
      var primero = {};
      if (animar && motion()) recs.forEach(function (r) { if (!r.li.hidden) primero[r.k] = r.li.getBoundingClientRect().top; });

      recs.forEach(function (r) {
        var antes = r.pct;
        r.faltan = r.ings.filter(function (i) { return tengo.indexOf(i) === -1; });
        r.pct = Math.round((r.ings.length - r.faltan.length) / r.ings.length * 100);
        r.bar.style.width = r.pct + '%';
        r.bar.style.setProperty('--w', r.pct + '%');
        contar(r.pctEl, antes, r.pct);
        r.li.classList.toggle('full', r.faltan.length === 0);
        r.falta.textContent = r.faltan.length === 0 ? '¡Tienes todo! Ya puedes cocinarla.' : 'Te falta: ' + r.faltan.map(function (i) { return nombres[i].toLowerCase(); }).join(', ');
      });

      var orden = recs.slice().sort(function (a, b) { return b.pct - a.pct || a.faltan.length - b.faltan.length || a.k - b.k; });
      orden.forEach(function (r, i) { lista.appendChild(r.li); r.li.hidden = i >= VISIBLES; });
      $('.js-full', demo).textContent = recs.filter(function (r) { return r.faltan.length === 0; }).length;

      if (animar && motion() && lista.animate) {
        orden.forEach(function (r) {
          if (r.li.hidden) return;
          var ahora = r.li.getBoundingClientRect().top;
          if (primero[r.k] === undefined) {
            r.li.animate([{ opacity: 0, transform: 'translateY(16px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.16,1,.3,1)' });
          } else if (primero[r.k] !== ahora) {
            r.li.animate([{ transform: 'translateY(' + (primero[r.k] - ahora) + 'px)' }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.16,1,.3,1)' });
          }
        });
      }
    };

    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
        pintar(true);
      });
    });
    $('.js-demo-todo', demo).addEventListener('click', function () { chips.forEach(function (c) { c.setAttribute('aria-pressed', 'true'); }); pintar(true); });
    $('.js-demo-nada', demo).addEventListener('click', function () { chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); }); pintar(true); });

    recs.forEach(function (r) {
      r.li.querySelector('.drec-add').addEventListener('click', function () {
        var nuevos = r.faltan.filter(function (i) { return carrito.indexOf(i) === -1; });
        cartBox.hidden = false;
        nuevos.forEach(function (i, n) {
          carrito.push(i);
          var li = document.createElement('li');
          li.textContent = nombres[i];
          cartItems.appendChild(li);
          if (motion() && li.animate) li.animate([{ opacity: 0, transform: 'translateY(-14px) scale(.6)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: n * 70, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'backwards' });
        });
        cartN.textContent = carrito.length;
        if (hasGsap) setTimeout(function () { window.ScrollTrigger.refresh(); }, 650);
        if (motion() && cartN.animate) cartN.animate([{ transform: 'scale(1.5)' }, { transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.34,1.56,.64,1)' });
      });
    });

    pintar(false);
  }

  /* ── FAQ con apertura animada ───────────────────── */
  $$('.faq details, .dl-help').forEach(function (d) {
    var sum = d.querySelector('summary');
    var cuerpo = d.querySelector('.faq-a, ol');
    if (!sum || !cuerpo || !cuerpo.animate) return;
    sum.addEventListener('click', function (e) {
      if (!motion()) return;
      e.preventDefault();
      if (d.open) {
        var h = cuerpo.offsetHeight;
        var a = cuerpo.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 320, easing: 'cubic-bezier(.16,1,.3,1)' });
        cuerpo.style.overflow = 'hidden';
        a.onfinish = function () { d.open = false; cuerpo.style.overflow = ''; };
      } else {
        d.open = true;
        var h2 = cuerpo.offsetHeight;
        cuerpo.style.overflow = 'hidden';
        var b = cuerpo.animate([{ height: '0px', opacity: 0 }, { height: h2 + 'px', opacity: 1 }], { duration: 480, easing: 'cubic-bezier(.16,1,.3,1)' });
        b.onfinish = function () { cuerpo.style.overflow = ''; };
      }
    });
  });

  /* ── Formulario de contacto ─────────────────────── */
  var form = $('.contact-form');
  if (form) {
    var validar = function (campo) {
      var f = campo.closest('.field');
      var ok = campo.value.trim() !== '' && (campo.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim()));
      f.classList.toggle('invalid', !ok);
      campo.setAttribute('aria-invalid', ok ? 'false' : 'true');
      var err = f.querySelector('.field-err');
      if (err) { if (ok) campo.removeAttribute('aria-describedby'); else campo.setAttribute('aria-describedby', err.id); }
      return ok;
    };
    var campos = $$('input, textarea', form);
    campos.forEach(function (c) {
      c.addEventListener('blur', function () { if (c.value !== '') validar(c); });
      c.addEventListener('input', function () { if (c.closest('.field').classList.contains('invalid')) validar(c); });
    });
    form.addEventListener('submit', function (e) {
      var malos = campos.filter(function (c) { return !validar(c); });
      if (malos.length) { e.preventDefault(); malos[0].focus(); return; }
      var b = form.querySelector('button[type="submit"]');
      if (b) { b.disabled = true; b.firstChild.textContent = 'Enviando… '; }
    });
  }

  /* ── Botones magnéticos ─────────────────────────── */
  function magnetos() {
    if (!finePointer) return;
    $$('.magnet').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        if (!motion()) return;
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.25;
        var y = (e.clientY - r.top - r.height / 2) * 0.35;
        el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1), background-color .25s, color .25s, box-shadow .3s';
        el.style.transform = '';
        setTimeout(function () { el.style.transition = ''; }, 600);
      });
    });
  }
  magnetos();

  /* ── Teléfono del hero: inclinación y stickers con profundidad ── */
  var visual = $('.hero-visual');
  var phoneHero = $('.phone-hero');
  if (visual && phoneHero && finePointer) {
    visual.addEventListener('pointermove', function (e) {
      if (!motion()) return;
      var r = visual.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      phoneHero.style.transform = 'perspective(1000px) rotateY(' + (px * 12).toFixed(2) + 'deg) rotateX(' + (-py * 10).toFixed(2) + 'deg)';
      $$('.st', visual).forEach(function (s) {
        var d = parseFloat(s.getAttribute('data-depth')) || 1;
        s.style.setProperty('--mx', (px * 26 * d).toFixed(1) + 'px');
        s.style.setProperty('--my', (py * 26 * d).toFixed(1) + 'px');
        s.style.marginLeft = 'var(--mx)'; s.style.marginTop = 'var(--my)';
      });
    });
    visual.addEventListener('pointerleave', function () {
      phoneHero.style.transform = '';
      $$('.st', visual).forEach(function (s) { s.style.marginLeft = ''; s.style.marginTop = ''; });
    });
    phoneHero.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
  }

  /* ── Bandas: avanzan solas y se aceleran con el scroll ── */
  var bandas = $$('.marquee').map(function (m) {
    var tr = m.querySelector('.marquee-track');
    return { m: m, tr: tr, n: tr.children.length, dir: m.classList.contains('rev') ? 1 : -1, x: 0, hover: false };
  });
  function periodo(b) { return b.tr.children[b.n] ? b.tr.children[b.n].offsetLeft - b.tr.children[0].offsetLeft : 0; }
  function llenar() {
    bandas.forEach(function (b) {
      if (!b.tr.children[b.n]) for (var k = 0; k < b.n; k++) b.tr.appendChild(b.tr.children[k].cloneNode(true));
      var p = periodo(b), guard = 0;
      while (p > 0 && b.tr.scrollWidth < window.innerWidth + p && guard++ < 10) {
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
      var objetivo = (!motion() || dt <= 0) ? 0 : Math.max(-900, Math.min(900, dy / dt * 0.4));
      vel += (objetivo - vel) * 0.12;
      bandas.forEach(function (b) {
        var p = periodo(b);
        if (motion() && !b.hover && p > 0) {
          b.x += b.dir * (70 + Math.abs(vel)) * dt;
          b.x = ((b.x % p) - p) % p;
        }
        b.tr.style.transform = 'translate3d(' + b.x.toFixed(2) + 'px,0,0)';
      });
      requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  }

  /* ── Botón para pausar animaciones ──────────────── */
  var toggle = $('.motion-toggle');
  function pintarToggle() {
    if (!toggle) return;
    var off = !motion();
    toggle.querySelector('span').textContent = off ? 'Activar animaciones' : 'Pausar animaciones';
    toggle.setAttribute('aria-pressed', off ? 'true' : 'false');
  }
  if (toggle) {
    pintarToggle();
    toggle.addEventListener('click', function () {
      var off = motion();
      try { localStorage.setItem('kukin-sin-movimiento', off ? '1' : '0'); } catch (e) {}
      // Recargamos para que todo quede en su estado final (o se monte de nuevo) sin piezas a medias
      location.reload();
    });
  }

  /* ═══════════ GSAP: secuencia inicial, textos y scroll ═══════════ */
  function conGsap() {
    var gsap = window.gsap;
    var ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);
    var hasSplit = typeof window.SplitText !== 'undefined';
    if (hasSplit) gsap.registerPlugin(window.SplitText);

    // Scroll suave
    if (typeof window.Lenis !== 'undefined') {
      lenis = new window.Lenis({ lerp: 0.11, wheelMultiplier: 1, anchors: { offset: -90 } });
      lenis.on('scroll', ST.update);
      gsap.ticker.add(function (t) { if (lenis) lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    var EXPO = 'expo.out';

    var introDelay = 0;
    // Mientras la pantalla de carga está arriba, las entradas esperan y arrancan al salir
    var cargando = root.classList.contains('cargando') && !!$('.loader');
    var alSalir = [];
    var arrancar = function (anim) { if (cargando) { anim.pause(); alSalir.push(anim); } return anim; };
    if (cargando && lenis) lenis.stop();

    // Títulos grandes: letras que suben al cargar
    $$('.split-chars').forEach(function (el, k) {
      if (!hasSplit) return;
      window.SplitText.create(el, {
        type: 'words,chars', mask: 'words', wordsClass: 'split-mask', autoSplit: true,
        onSplit: function (self) {
          gsap.set(el, { visibility: 'visible' });
          return arrancar(gsap.from(self.chars, { yPercent: 115, rotate: 6, duration: 1.15, ease: EXPO, stagger: 0.022, delay: introDelay + 0.15 + k * 0.12 }));
        }
      });
    });

    // Títulos de sección: líneas que suben al entrar
    $$('.split').forEach(function (el) {
      if (!hasSplit) return;
      window.SplitText.create(el, {
        type: 'lines', mask: 'lines', linesClass: 'split-mask', autoSplit: true,
        onSplit: function (self) {
          gsap.set(el, { visibility: 'visible' });
          return gsap.from(self.lines, { yPercent: 110, duration: 1.2, ease: EXPO, stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
        }
      });
    });

    // Secuencia del hero
    var hero = $('.hero');
    if (hero) {
      var tl = arrancar(gsap.timeline({ defaults: { ease: EXPO }, delay: introDelay }));
      gsap.set(['.hero-phone-wrap', '.hero .st', '.hero-sub', '.hero .lead', '.hero .cta-group', '.hero-note'], { visibility: 'visible' });
      tl.from('.hero-blob', { scale: 0.6, opacity: 0, duration: 1.6 }, 0)
        .from('.hero-phone-wrap', { yPercent: 40, rotate: 8, opacity: 0, duration: 1.5 }, 0.2)
        .from('.hero-sub', { y: 30, opacity: 0, filter: 'blur(8px)', duration: 1 }, 0.55)
        .from('.hero .lead', { y: 30, opacity: 0, filter: 'blur(8px)', duration: 1 }, 0.65)
        .from('.hero .cta-group .btn', { y: 26, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.75)
        .from('.hero-note', { opacity: 0, duration: 0.8 }, 0.95)
        .from('.hero .st', { scale: 0, rotate: -40, duration: 1.1, ease: 'back.out(2.2)', stagger: 0.07 }, 0.7)
        .from('.fc-noti', { x: -40, opacity: 0, scale: 0.9, duration: 1 }, 1.15)
        .from('.fc-wa', { x: 40, opacity: 0, scale: 0.9, duration: 1 }, 1.3);

      // Al bajar, el teléfono se aleja y los stickers flotan a distintas velocidades
      gsap.to('.hero-phone-wrap', { yPercent: 12, scale: 0.94, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      $$('.hero .st').forEach(function (s) {
        var d = parseFloat(s.getAttribute('data-depth')) || 1;
        gsap.to(s, { y: -140 * d, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      });
      gsap.to('.hero-copy', { yPercent: -10, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: hero, start: 'center top', end: 'bottom top', scrub: true } });
    }

    // Respuestas de los dolores: aparecen con rebote
    $$('[data-pop]').forEach(function (el) {
      gsap.from(el, { scale: 0.6, opacity: 0, rotate: -6, duration: 1, ease: 'back.out(2)', scrollTrigger: { trigger: el, start: 'top 82%', once: true } });
    });
    var fin = $('.dolores-fin');
    if (fin) gsap.from(fin, { scale: 0.85, ease: 'none', scrollTrigger: { trigger: fin, start: 'top bottom', end: 'center center', scrub: true } });

    // Teléfono de la historia: sube y se endereza al llegar
    var ph = $('.story-phone');
    if (ph) gsap.from(ph, { y: 120, rotate: 6, ease: 'none', scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'top 20%', scrub: true } });

    // Funciones: pista horizontal fija en escritorio
    var mm = gsap.matchMedia();
    var hfeat = $('.hfeat');
    if (hfeat) {
      mm.add('(min-width: 921px)', function () {
        var trk = $('.hfeat-track', hfeat);
        hfeat.classList.add('is-pinned');
        var dist = function () { return Math.max(0, trk.scrollWidth - window.innerWidth); };
        var tw = gsap.to(trk, {
          x: function () { return -dist(); }, ease: 'none',
          scrollTrigger: { trigger: hfeat.querySelector('.hfeat-pin'), start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 }
        });
        $$('.hcard', trk).forEach(function (c) {
          gsap.from(c.querySelector('.hcard-em'), { rotate: -30, scale: 0.5, ease: 'back.out(2)', scrollTrigger: { trigger: c, containerAnimation: tw, start: 'left 95%', end: 'left 60%', scrub: true } });
        });
        return function () { hfeat.classList.remove('is-pinned'); };
      });
      mm.add('(max-width: 920px)', function () {
        $$('.hcard', hfeat).forEach(function (c) {
          gsap.from(c, { y: 50, opacity: 0, duration: 1, ease: EXPO, scrollTrigger: { trigger: hfeat, start: 'top 75%', once: true } });
        });
      });
    }

    // Campos de color que se expanden al entrar (recetario y cierre)
    $$('.recetario-field, .cierre-field').forEach(function (f) {
      gsap.fromTo(f, { clipPath: 'inset(6% 5% 6% 5% round 48px)' }, { clipPath: 'inset(0% 0% 0% 0% round 32px)', ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'top 35%', scrub: true } });
    });

    // Platillos que caen como stickers
    var platos = $$('.plato');
    if (platos.length) {
      gsap.from(platos, { y: -70, rotate: function () { return gsap.utils.random(-12, 12); }, opacity: 0, duration: 0.9, ease: 'back.out(1.8)', stagger: { each: 0.04, from: 'random' }, scrollTrigger: { trigger: '.platos', start: 'top 85%', once: true } });
    }

    // Visuales de funciones: parallax suave dentro del recuadro
    $$('.feat-visual').forEach(function (v) {
      var a = v.querySelector('.mini-tilt, .noti');
      var b = v.querySelector('.mini-pop, .noti-2');
      if (a) gsap.fromTo(a, { y: 60 }, { y: -30, ease: 'none', scrollTrigger: { trigger: v, start: 'top bottom', end: 'bottom top', scrub: true } });
      if (b) gsap.fromTo(b, { y: 50 }, { y: -50, ease: 'none', scrollTrigger: { trigger: v, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // Teléfono de descarga
    if ($('.phone-dl')) gsap.from('.phone-dl', { yPercent: 30, rotate: -8, opacity: 0, duration: 1.5, ease: EXPO, delay: 0.3 });

    // Palabra gigante del pie
    var fw = $('.footer-word');
    if (fw && hasSplit) {
      window.SplitText.create(fw, {
        type: 'chars', autoSplit: true,
        onSplit: function (self) {
          return gsap.from(self.chars, { yPercent: 45, rotate: function (i) { return (i % 2 ? 1 : -1) * 6; }, ease: 'none', stagger: 0.08, scrollTrigger: { trigger: fw, start: 'top bottom', end: 'bottom 85%', scrub: true } });
        }
      });
    }

    // Cursor seguidor (solo mouse)
    if (finePointer) {
      var cur = document.createElement('div');
      cur.className = 'cursor';
      cur.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cur);
      var cx = gsap.quickTo(cur, 'x', { duration: 0.35, ease: 'power3.out' });
      var cy = gsap.quickTo(cur, 'y', { duration: 0.35, ease: 'power3.out' });
      window.addEventListener('pointermove', function (e) { cur.classList.add('on'); cx(e.clientX); cy(e.clientY); }, { passive: true });
      document.addEventListener('pointerleave', function () { cur.classList.remove('on'); });
      document.addEventListener('pointerover', function (e) {
        var t = e.target;
        cur.classList.toggle('ver', !!t.closest('.hcard'));
        cur.classList.toggle('big', !t.closest('.hcard') && !!t.closest('a, button, summary, [role="tab"], label, input, textarea'));
      });
    }

    // Demo: entra con las tarjetas escalonadas
    if ($('.demo')) {
      gsap.from('.demo-card', { y: 60, opacity: 0, duration: 1.1, ease: EXPO, stagger: 0.12, scrollTrigger: { trigger: '.demo-grid', start: 'top 82%', once: true } });
      gsap.from('.dchip', { scale: 0.6, opacity: 0, duration: 0.7, ease: 'back.out(2)', stagger: { each: 0.025, from: 'random' }, scrollTrigger: { trigger: '.demo-chips', start: 'top 85%', once: true } });
    }

    // Pantalla de carga: progreso real y, al terminar, el visitante cocina (scroll, toque o teclado)
    if (cargando) {
      root.classList.add('carga-js');
      var ld = $('.loader'), ldPct = $('.js-ld-pct'), ldBar = $('.ld-bar i'), ldMsg = $('.ld-msg');
      var ldCarga = $('.ld-carga', ld), ldCocina = $('.ld-cocina', ld), ldN = $('.js-ld-n', ld);
      var box = $('.ld-box', ld), tapa = $('.ld-tapa', ld), cuerpo = $('.ld-cuerpo', ld);
      var vapor = $$('.ld-vapor path', ld), burbujas = $$('.ld-burbujas circle', ld);
      var gotas = $$('.olla-splash i', ld), confeti = $$('.olla-boom i', ld);
      var sts = $$('.ld-st', ld), listoEl = $('.olla-listo', ld), skip = $('.ld-skip', ld);
      var prog = { v: 0 }, salio = false, cocinando = false, explotando = false;
      var pintarProg = function () {
        ldPct.textContent = Math.round(prog.v * 100) + '%';
        ldBar.style.transform = 'scaleX(' + prog.v.toFixed(3) + ')';
      };
      var avanzar = function (a, dur, fin) { gsap.to(prog, { v: a, duration: dur || 0.7, ease: 'power2.out', overwrite: true, onUpdate: pintarProg, onComplete: fin }); };

      // Salida: el telón sube y arranca la página
      var salir = function () {
        if (salio) return;
        salio = true;
        quitarEntradas();
        var out = gsap.timeline({ onComplete: function () {
          root.classList.remove('cargando', 'carga-js');
          ld.remove();
          if (lenis) lenis.start();
          ST.refresh();
        } });
        out.to([ld.querySelector('.ld-in'), skip], { y: -50, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)
          .to(ld, { clipPath: 'inset(0 0 100% 0)', duration: 0.95, ease: 'expo.inOut' }, 0.1)
          .call(function () { alSalir.forEach(function (a) { a.play(); }); }, null, 0.4);
      };
      skip.addEventListener('click', salir);

      // La cocina (se controla con el avance del visitante)
      var boca = function () { return { x: box.offsetLeft + box.offsetWidth / 2, y: box.offsetTop + box.offsetHeight * 0.44 }; };
      var centro = function (s) { return { x: s.offsetLeft + s.offsetWidth / 2, y: s.offsetTop + s.offsetHeight / 2 }; };
      var PASO = 0.8, INICIO = 0.5;
      var cocina = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
      cocina.to(tapa, { y: -58, x: -26, rotate: -24, duration: 0.5, ease: 'back.out(1.6)' }, 0);
      sts.forEach(function (s, i) {
        var t = INICIO + i * PASO;
        cocina.to(s, {
          x: function () { return boca().x - centro(s).x; },
          y: function () { return boca().y - centro(s).y; },
          scale: 0.4, rotate: (i % 2 ? 1 : -1) * 160, duration: 0.6, ease: 'power2.in'
        }, t)
          .to(s, { opacity: 0, duration: 0.08 }, t + 0.56)
          .to(cuerpo, { scaleY: 0.92, scaleX: 1.05, duration: 0.08, yoyo: true, repeat: 1 }, t + 0.58)
          .fromTo(gotas, { x: 0, y: 0, scale: 1, opacity: 1 }, {
            x: function (k) { return (k - 2.5) * 24; }, y: function (k) { return -40 - (k % 3) * 14; },
            scale: 0.3, opacity: 0, duration: 0.35, immediateRender: false
          }, t + 0.58);
      });
      var finIngr = INICIO + (sts.length - 1) * PASO + 0.7;
      cocina.to(tapa, { y: 0, x: 0, rotate: 0, duration: 0.5, ease: 'bounce.out' }, finIngr)
        .to(box, { rotate: 3, duration: 0.06, yoyo: true, repeat: 7 }, finIngr + 0.5)
        .to(tapa, { y: -6, duration: 0.06, yoyo: true, repeat: 7 }, finIngr + 0.5)
        .to(vapor, { strokeDashoffset: 0, opacity: 0.9, duration: 0.6, stagger: 0.1 }, finIngr + 0.6);
      cocina.eventCallback('onUpdate', function () {
        var n = Math.max(0, Math.min(sts.length, Math.floor((cocina.time() - INICIO - 0.56) / PASO) + 1));
        if (ldN.textContent !== String(n)) {
          ldN.textContent = n;
          if (ldN.animate) ldN.animate([{ transform: 'scale(1.7)' }, { transform: 'none' }], { duration: 350, easing: 'cubic-bezier(.34,1.56,.64,1)' });
        }
      });

      // ¡Explota! Los ingredientes salen disparados y sube el telón
      var explotar = function () {
        if (explotando) return;
        explotando = true;
        var boom = gsap.timeline({ onComplete: salir });
        boom.to(ldCocina, { opacity: 0, y: 10, duration: 0.25 }, 0)
          .to(box, { scale: 1.18, duration: 0.14, ease: 'power2.out' }, 0)
          .to(tapa, { y: -360, x: 70, rotate: 280, opacity: 0, duration: 1, ease: 'power2.out' }, 0.1)
          .fromTo(confeti, { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }, {
            x: function (k) { return Math.cos(k / confeti.length * Math.PI * 2) * gsap.utils.random(170, 300); },
            y: function (k) { return Math.sin(k / confeti.length * Math.PI * 2) * gsap.utils.random(130, 240) - 50; },
            rotate: function () { return gsap.utils.random(-360, 360); },
            opacity: 0, scale: 0.4, duration: 1.2, ease: 'expo.out', immediateRender: false
          }, 0.12)
          .to(box, { scale: 1, duration: 0.5, ease: 'elastic.out(1, .4)' }, 0.16)
          .set(sts, { x: function (k, s) { return boca().x - centro(s).x; }, y: function (k, s) { return boca().y - centro(s).y; }, opacity: 1, scale: 0.5 }, 0.12)
          .to(sts, {
            x: function (k) { return Math.cos((k / sts.length) * Math.PI * 2 - Math.PI / 2) * gsap.utils.random(420, 620); },
            y: function (k) { return Math.sin((k / sts.length) * Math.PI * 2 - Math.PI / 2) * gsap.utils.random(320, 460); },
            scale: 1.3, rotate: function () { return gsap.utils.random(-540, 540); }, duration: 1.1, ease: 'power3.out', stagger: 0.03
          }, 0.14)
          .fromTo(listoEl, { opacity: 0, scale: 0.4, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(2.4)' }, 0.25)
          .to({}, { duration: 0.35 });
      };

      // Entradas: rueda del mouse, dedo, teclado o toque en la olla
      var objetivo = 0;
      var empujar = function (d) {
        if (!cocinando || explotando || salio) return;
        objetivo = Math.max(0, Math.min(1, objetivo + d));
        gsap.to(cocina, {
          progress: objetivo, duration: 0.55, ease: 'power2.out', overwrite: true,
          onComplete: function () { if (objetivo >= 1) explotar(); }
        });
      };
      var unPaso = PASO / cocina.duration();
      var onWheel = function (e) { e.preventDefault(); empujar(e.deltaY / 1100); };
      var touchY = null;
      var onTouchStart = function (e) { touchY = e.touches[0].clientY; };
      var onTouchMove = function (e) { if (touchY === null) return; e.preventDefault(); var y = e.touches[0].clientY; empujar((touchY - y) / 520); touchY = y; };
      var onKey = function (e) {
        var enBoton = e.target && e.target.closest && e.target.closest('button, a');
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || ((e.key === ' ' || e.key === 'Enter') && !enBoton)) { e.preventDefault(); empujar(unPaso); }
        else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); empujar(-unPaso); }
        else if (e.key === 'Escape') salir();
      };
      var onTap = function () { empujar(unPaso); };
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('keydown', onKey);
      box.addEventListener('click', onTap);
      function quitarEntradas() {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('keydown', onKey);
        box.removeEventListener('click', onTap);
      }

      // Cuando termina de cargar: se cambia la barra por la invitación a cocinar
      var aCocinar = function () {
        if (cocinando || salio) return;
        cocinando = true;
        gsap.set(tapa, { animation: 'none', transformOrigin: '30% 100%' });
        gsap.set(vapor, { animation: 'none', strokeDasharray: 60, strokeDashoffset: 60, opacity: 0 });
        gsap.set(burbujas, { animation: 'none', opacity: 0 });
        gsap.set(cuerpo, { transformOrigin: '50% 100%' });
        ldMsg.textContent = '¡Ya está caliente!';
        gsap.timeline()
          .to(ldCarga, { opacity: 0, y: -10, duration: 0.3, delay: 0.35 })
          .call(function () { ldCarga.hidden = true; ldCocina.hidden = false; })
          .fromTo(ldCocina, { opacity: 0, y: 14, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(2)' });
      };

      var minimo = new Promise(function (r) { setTimeout(r, 1700); });
      var cargaPagina = document.readyState === 'complete' ? Promise.resolve() : new Promise(function (r) { window.addEventListener('load', r, { once: true }); });
      var fuentes = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      avanzar(0.55, 0.9);
      fuentes.then(function () { if (!cocinando) avanzar(0.8, 0.8); });
      Promise.all([minimo, cargaPagina, fuentes]).then(function () { avanzar(1, 0.5, aCocinar); });
      setTimeout(function () { avanzar(1, 0.3, aCocinar); }, 6000);
    }

    // Recalcular cuando cargan fuentes
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }

  try {
    if (hasGsap && motion()) conGsap();
    else root.classList.remove('cargando');
  } catch (err) {
    root.classList.remove('cargando');
    if (window.console) console.warn('Animaciones desactivadas:', err);
  }
  listo();
  onScroll();
})();

// Se carga en <head>: marca que hay JS y decide si habrá animaciones antes de pintar.
// Las animaciones están encendidas por defecto. 'kukin-sin-movimiento' = '1' si el visitante las apagó.
// La pantalla de carga sale una vez por visita (sessionStorage), solo con animaciones.
(function () {
  var root = document.documentElement;
  var pref = null;
  root.classList.add('js');
  try { pref = localStorage.getItem('kukin-sin-movimiento'); } catch (e) {}
  if (pref === '1') { root.classList.add('no-motion'); return; }
  root.classList.add('motion');
  try {
    if (sessionStorage.getItem('kukin-carga') !== '1') {
      sessionStorage.setItem('kukin-carga', '1');
      root.classList.add('cargando');
      // red de seguridad: si el JS principal no tomó el control, la pantalla de carga se quita a los 7 s
      setTimeout(function () { if (!root.classList.contains('carga-js')) root.classList.remove('cargando'); }, 7000);
    }
  } catch (e) {}
})();

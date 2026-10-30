/* Presentación troll antes de la página: se superpone a pantalla completa y, al terminar (20 s, queda en negro),
   se desvanece y deja ver la página de abajo (la pantalla "Tocá para ver el video" de Butbe).
   Se incluye con UNA línea en el <head> de la página:  <script src="bioferia-troll/pre.js"></script>
   Para saltearla al probar: agregar #sin-troll a la dirección. */
(function () {
  if (location.hash.indexOf('sin-troll') > -1) return;
  var f = document.createElement('iframe');
  f.src = 'bioferia-troll/index.html';
  f.setAttribute('allow', 'autoplay; fullscreen');
  f.setAttribute('allowfullscreen', '');
  f.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;border:0;background:#000;z-index:2147483647;transition:opacity .8s ease';
  function add() { document.documentElement.appendChild(f); }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
  addEventListener('message', function (e) {
    if (e.data && e.data.type === 'troll-end') {
      f.style.opacity = 0;
      setTimeout(function () { f.remove(); }, 900);
    }
  });
})();

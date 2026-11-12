// Marks the section you are reading in the "On this page" list.
(function () {
  var links = [].slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (!links.length) return;
  var heads = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var ticking = false;
  function mark() {
    ticking = false;
    var top = document.querySelector('.top');
    var cur = 0, line = (top ? top.offsetHeight : 0) + 40;
    for (var i = 0; i < heads.length; i++) {
      if (heads[i] && heads[i].getBoundingClientRect().top <= line) cur = i;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = heads.length - 1;
    links.forEach(function (a, i) {
      if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(mark); }
  }, { passive: true });
  window.addEventListener('resize', mark);
  mark();
})();

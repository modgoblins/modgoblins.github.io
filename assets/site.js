// Guide pages: each entry of "On this page" opens as its own page.
(function () {
  var secs = [].slice.call(document.querySelectorAll('article > section.sec'));
  var links = [].slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (!secs.length || !links.length) return;
  var sticky = document.querySelector('.sticky');
  var intro = document.querySelector('article > .intro');
  var pager = document.querySelector('article > .pager');
  var article = document.querySelector('article');

  function headHeight() { return sticky ? sticky.offsetHeight : 0; }
  function setVar() { document.documentElement.style.setProperty('--head-h', headHeight() + 'px'); }

  function indexOf(id) {
    for (var i = 0; i < secs.length; i++) if (secs[i].id === id) return i;
    return -1;
  }
  function pagerLink(i, cls, label) {
    if (i < 0 || i >= secs.length) return '<span></span>';
    return '<a class="' + cls + '" href="#' + secs[i].id + '"><small>' + label + '</small>' +
      secs[i].querySelector('h2').textContent + '</a>';
  }
  function show(i, scroll) {
    if (i < 0) i = 0;
    secs.forEach(function (s, n) { s.hidden = n !== i; });
    if (intro) intro.hidden = i !== 0;
    links.forEach(function (a) {
      if (a.getAttribute('href') === '#' + secs[i].id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    if (pager) pager.innerHTML = pagerLink(i - 1, 'prev', 'Previous') + pagerLink(i + 1, 'next', 'Next');
    if (scroll) {
      var narrow = window.matchMedia('(max-width: 820px)').matches;
      var y = narrow ? article.getBoundingClientRect().top + window.scrollY - headHeight() - 12 : 0;
      window.scrollTo(0, Math.max(0, y));
    }
  }
  function fromHash(scroll) { show(indexOf(location.hash.slice(1)), scroll); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var i = indexOf(a.getAttribute('href').slice(1));
    if (i < 0) return;
    e.preventDefault();
    history.pushState(null, '', '#' + secs[i].id);
    show(i, true);
  });
  window.addEventListener('popstate', function () { fromHash(true); });
  window.addEventListener('resize', setVar);
  window.addEventListener('load', setVar);
  document.documentElement.classList.add('paged');
  setVar();
  fromHash(false);
  if (location.hash) window.scrollTo(0, 0);
})();

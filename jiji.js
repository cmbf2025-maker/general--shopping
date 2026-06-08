//base jiji to scriptbank scripts

  if (location.search.includes('debug=true')) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/eruda';
    document.body.appendChild(s);
    s.onload = function() { eruda.init(); };
  }

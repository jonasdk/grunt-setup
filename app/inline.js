// Inline scripts should not be using jQuery since it is run when the page loads
// and nothing else is loaded

// The following script toggles the topmenu when shown on mobile or desktop
// devices. Self-invoking function but with protected namespace.
(function() {
  var width = window.innerWidth;
  var topmenuEl = document.getElementsByClassName('js-layout--top__main')[0];

  function menuhide() {
    // It has to be innerWidth since outerWidth isn't supported by the iPad Safari
    width = window.innerWidth;

    // This part hides the menu on small screen devices below 700px in width
    if (width < 700) {
      topmenuEl.style.display = 'none';
    } else {
      topmenuEl.style.display = 'block';
    }
  }

  window.onresize = menuhide;
  window.onload = menuhide;
})();

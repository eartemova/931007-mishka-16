var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--mobile-nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--mobile-closed')) {
      navMain.classList.remove('main-nav--mobile-closed');
      navMain.classList.add('main-nav--mobile-opened');
    } else {
      navMain.classList.add('main-nav--mobile-closed');
      navMain.classList.remove('main-nav--mobile-opened');
    }
  });

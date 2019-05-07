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

var btn = document.getElementsByClassName("modal-btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

overlay.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');
})

var сontactsMap;
var center;

function initMap() {
сontactsMap = new google.maps.Map(document.getElementById('contactsMap'), {
center: { lat: 59.938969, lng: 30.3227574 },
zoom: 18,
});

var image = 'img/icon-map-pin.svg';
var marker = new google.maps.Marker({
  position: center,
  сontactsMap: сontactsMap,
  icon: image
  });
}

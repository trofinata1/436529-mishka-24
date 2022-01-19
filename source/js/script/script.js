var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

var modal = document.querySelector('.modal');
var order = document.querySelector('.product__button');
var modalBackground = document.querySelector('.modal__background');

order.addEventListener('click', function() {
  modal.classList.add('modal--active');
});

modalBackground.addEventListener('click', function(e) {
  if (e.target) {
    modal.classList.remove('modal--active');
  }

});


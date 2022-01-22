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

order.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal--active');
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--active');
  }
});

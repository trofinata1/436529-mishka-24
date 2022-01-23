var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

function modalShow(className) {
  var modal = document.querySelector('.modal');
  var order = document.querySelectorAll(className);

  order.forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.add('modal--active');
    });
  })

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      modal.classList.remove('modal--active');
    }
  });
}

modalShow('.product__button');
modalShow('.card__button');

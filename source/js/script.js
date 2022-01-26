const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

function modalShow(className) {
  const modal = document.querySelector('.modal');
  const orders = document.querySelectorAll(className);

  orders.forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.add('modal--active');
    });
  })

  document.addEventListener('keydown', function(evt) {
    if (evt.key === "Escape") {
      modal.classList.remove('modal--active');
    }
  });
}

modalShow('.product__button');
modalShow('.card__button');

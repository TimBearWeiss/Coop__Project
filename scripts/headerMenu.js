const headerMenuButton = document.querySelector('.header__mobile-menu');
const headerMenuPopup = document.querySelector('.popup-menu');
const headerMenuCloseButton = headerMenuPopup.querySelector('.popup-menu__close-button');
const itemMenu = headerMenuPopup.querySelectorAll('.popup-menu__menu-item');
console.log(itemMenu)

// Слушатель открытия попапа мобильного меню
headerMenuButton.addEventListener('click', function () {
  headerMenuPopup.style.visibility = "visible";
})

// Слушатель закрытия попапа мобильного меню
headerMenuCloseButton.addEventListener('click', function () {
  headerMenuPopup.style.visibility = "hidden";
})

// Слушатель закрытия попапа мобильного меню
itemMenu.forEach(function (item) {
  item.addEventListener('click', function () {
    headerMenuPopup.style.visibility = "hidden";
  })
})
const smallHeaderPopupButton = document.querySelector('.header__item_education')
const smallHeaderPopup = document.querySelector('.header__small-popup')

function togglePopup(popup) {
    popup.classList.toggle('header__small-popup_active');
  } 

  function toggleSecondPopup(popup) {
    popup.classList.toggle('header-popup_opened');
  } 

smallHeaderPopupButton.addEventListener("click", function() { 
  togglePopup(smallHeaderPopup)
});

const headerMenuButton = document.querySelector('.header__burger')
const menuPopup = document.querySelector('.header-popup')
const closeMenu = document.querySelector('.header-popup__close')

headerMenuButton.addEventListener('click', () => {
  menuPopup.classList.add('header-popup_opened')
}
);

menuPopup.addEventListener('mousedown', (event) => { 

  if(event.target === event.currentTarget) { 
    menuPopup.classList.remove('header-popup_opened');
  }
})

closeMenu.addEventListener('click', () => {
  menuPopup.classList.remove('header-popup_opened')
});

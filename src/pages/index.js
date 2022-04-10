import { Popup } from "../scripts/Popup.js";
const cardButtons = document.querySelectorAll('.lab-card__button');

const popupLab = new Popup('.popup-lab');

function handleCardButton() {
  popupLab.open()
}


popupLab.setEventListener();
cardButtons.forEach((btn) => {
btn.addEventListener('click', () => {handleCardButton()})
});

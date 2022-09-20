import { Card } from "./Card.js";

export class PublicationCard extends Card {
  constructor(cardData, cardTemplateSelector) {
    super(cardData, cardTemplateSelector);
  }

  generateCard() {
    this._element = this._getTemplate()
      .querySelector(".publications-card")
      .cloneNode(true);

    this._image = this._element.querySelector(".publications-card__image");
    this._title = this._element.querySelector(".publications-card__title");
    this._subtitle = this._element.querySelector(
      ".publications-card__subtitle"
    );
    this._text = this._element.querySelector(".publications-card__text");
    this._link = this._element.querySelector(
      ".publications-card__link_type_read-more"
    );
    this._share = this._element.querySelector(".ya-share2");
    this._buttonShare = this._element.querySelector(
      ".publications-card__link_type_sm-share"
    );
    this._popupShare = this._element.querySelector(".ya-share2");

    this._image.src = this._cardData.img;
    this._title.textContent = this._cardData.title;
    this._subtitle.textContent = this._cardData.subtitle;
    this._text.textContent = this._cardData.text;
    this._link.src = this._cardData.link;
    this._share.dataset.title = this._cardData.text;
    this._share.dataset.url = this._cardData.link;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._buttonShare.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._popupShare.classList.toggle("ya-share2_opened");
    });

    this._element.addEventListener("mouseleave", () => {
      this._popupShare.classList.remove("ya-share2_opened");
    });
  }
}

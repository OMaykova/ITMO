import { Card } from "./Card.js";

export default class AboutUsCard extends Card {
    constructor(cardData, cardTemplateSelector) {
        super(cardData, cardTemplateSelector);
    }
    generateCard() {

        this._element = this._getTemplate()
            .querySelector(".about-us__card")
            .cloneNode(true);
        this._data = this._element.querySelector(".about-us__date");
        this._title = this._element.querySelector(".about-us__name");
        this._subtitle = this._element.querySelector(".about-us__description");
        this._data.textContent = this._cardData.date;
        this._title.textContent = this._cardData.title;
        this._subtitle.textContent = this._cardData.subtitle;
        return this._element;
    }
}
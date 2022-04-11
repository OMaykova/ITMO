import { Card } from "./Card.js";

export default class OurTeamCard extends Card {
    constructor(cardData, cardTemplateSelector) {
        super(cardData, cardTemplateSelector);
    }
    generateCard() {
        this._element = this._getTemplate()
            .querySelector(".our-team__card")
            .cloneNode(true);
        // console.log(this._element);
        this._image = this._element.querySelector(".our-team__image");
        this._title = this._element.querySelector(".our-team__name");
        this._subtitle = this._element.querySelector(".our-team__description");
        this._image.src = this._cardData.img;
        this._title.textContent = this._cardData.title;
        this._subtitle.textContent = this._cardData.subtitle;
        return this._element;
    }
}




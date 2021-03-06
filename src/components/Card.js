export class Card {
  constructor(cardData, cardTemplateSelector) {
    this._cardData = cardData;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
    return document.querySelector(this._cardTemplateSelector).content;
  }
}

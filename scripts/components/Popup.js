export class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._closeButton = this._popup.querySelector('.popup-lab__close-button');
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  open() {
    this._popup.classList.add('popup-lab_opened')
    document.addEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    };
  }

  _handleOverlayClose(event) {
    if (event.target === event.currentTarget) {
      this.close();
    };
  }
  setEventListener() {
    this._closeButton.addEventListener('click', () => {this.close()});
    this._popup.addEventListener('mousedown', (event) => {this._handleOverlayClose(event)});
  }
  close() {
    this._popup.classList.remove('popup-lab_opened')
    document.removeEventListener('keydown', this._handleEscClose);
  }
}

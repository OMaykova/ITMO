export class HeaderPopups {
  constructor(popup) {
    this._popup = document.querySelector(popup)
  }
  
  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  
  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('header-popup_opened') || event.target.classList.contains('header-popup__close')) {
        this.close()
      }
    })
  }
  
  open() {
    this._popup.classList.add('header-popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  
  close() {
    this._popup.classList.remove('header-popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  togglePopup() {
    this._popup.classList.toggle('header__small-popup_active');
  }
}
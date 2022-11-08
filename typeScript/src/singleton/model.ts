

class Dialog {

  private _state: string = 'hide'

  show() {
    if (this._state === 'show') return;
    // TODO: show the dialog
    this._state = 'show';
  }

  hide() {
    if (this._state === 'hide') return;
    // TODO: hide the Dialog
    this._state = 'hide';
  }

  private constructor() {}
  
  private static instance: Dialog | null = null;

  static getInstance(): Dialog {
    if (this.instance == null) {
      this.instance = new Dialog();
    }
    return this.instance;
  }
}
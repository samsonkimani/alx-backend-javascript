export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code);
    this._name = this.validateString(name);
  }

  // get code
  get code() {
    return this._code;
  }

  // set code
  set code(newCode) {
    this._code = this.validateString(newCode);
  }

  // get name
  get name() {
    return this._name;
  }

  // set name
  set name(newName) {
    this._name = this.validateString(newName);
  }

  // eslint-disable-next-line
  validateString(value) {
    if (typeof value !== 'string') {
      return new TypeError();
    }
    return value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code});`;
  }
}

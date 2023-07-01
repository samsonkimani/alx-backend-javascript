export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get code
  getCode() {
    return this._code;
  }

  // set code
  setCode(newCode) {
    this._code = newCode;
  }

  // get name
  getName() {
    return this._name;
  }

  // set name
  setName(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code});`;
  }
}

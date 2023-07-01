export default class Currency {
  constructor(code, name) {
	  if (typeof name !== 'string' || typeof code !== 'string') { throw new Error(); }
    this._code = code;
    this._name = name;
  }

  // get code
  get code() {
    return this._code;
  }

  // set code
  set code(newCode) {
    this._code = newCode;
  }

  // get name
  get name() {
    return this._name;
  }

  // set name
  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code});`;
  }
}

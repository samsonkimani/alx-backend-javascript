export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateLength(length, 'Length');
    this._students = this.validateStudents(students);
  }

  // name getter
  get name() {
    return this._name;
  }

  // set name
  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  // length getter
  get length() {
    return this._length;
  }

  // set length
  set length(newLength) {
    this._length = this.validateLength(newLength, 'Length');
  }

  // get students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateStudents(newStudents);
  }
  // eslint-disable-next-line
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
  // eslint-disable-next-line
  validateLength(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }
  // eslint-disable-next-line
  validateStudents(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}

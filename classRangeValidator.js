"use strict";

class RangeValidator {
  /**
   *
   * @param {number} from
   * @param {number} to
   */
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("FROM must be a number");
    }
    if (value >= this.to) {
      throw new RangeError("FROM must be less than TO");
    }
    this._from = value;
  }
  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("TO must be a number");
    }
    if (value <= this.from) {
      throw new RangeError("TO must be greater than FROM");
    }
    this._to = value;
  }
  get range() {
    return [this.from, this.to];
  }
  isValid(value) {
    if (typeof value !== "number") {
      throw new TypeError("entered value must be a number");
    }
    return value >= this.from && value <= this.to;
  }
}
try {
  // Конструктор (+сеттери)
  const range1 = new RangeValidator(1, 5.5); // Відпрацьовує
  //const range1 = new RangeValidator(10, 5.5); // ПОМИЛКА! (оскільки має бути from <= to)

  // Робота сетерів
  range1.from = 5; // Відпрацьовує
  range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)

  range1.to = 80; // Відпрацьовує
  range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from

  // Робота гетерів
  console.log(range1.from); // => 5
  console.log(range1.to); // => 80

  // Робота геттера range
  console.log(range1.range); // => [5, 80]

  // Робота validate
  console.log(range1.isValid(10)); // => true (оскільки належить діапазону [5, 80])
  console.log(range1.isValid(100)); // => false (оскільки не належить діапазону [5, 80])
} catch (error) {
  console.log(error);
}

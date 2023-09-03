"use strict";

class Phone {
  /**
   *
   * @param {string} brand
   * @param {string} model
   * @param {string} color
   * @param {number} price
   * @param {number} year
   */
  constructor(brand, model, color, price, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  set brand(value) {
    if (typeof value !== "string") {
      throw new TypeError("brand must be a string");
    }
    this._brand = value;
  }
  get brand() {
    return this._brand;
  }

  set model(value) {
    if (typeof value !== "string") {
      throw new TypeError("model must be a string");
    }
    this._model = value;
  }
  get model() {
    return this._model;
  }

  set color(value) {
    if (typeof value !== "string") {
      throw new TypeError("color must be a string");
    }
    this._color = value;
  }
  get color() {
    return this._color;
  }

  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("price must be a number");
    }
    if (value < 0) {
      throw new RangeError("price must be a positive number");
    }
    this._price = value;
  }
  get price() {
    return this._price;
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value !== "number") {
      throw new TypeError("year must be a number");
    }
    if (value < 1900 || value > new Date().getFullYear()) {
      throw new RangeError("entered year is incorrect");
    }
    this._year = value;
  }

  calcPhoneAge() {
    return new Date().getFullYear() - this.year;
  }
}
try {
  const iphone = new Phone("Apple", "iphone 14", "white", 100, 2022);
  console.log(iphone.calcPhoneAge()); // 1
  iphone.year = 2012;
  console.log(iphone.year); // 2012
  iphone.year = 1897; //RangeError: entered year is incorrect
} catch (error) {
  console.log(error);
}

class User {
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this._firstname = name;
    this._lastname = surname;
    this.age = age;
    this._isMale = isMale;
    this._email = email;
    this._isSubscribed = isSubscribed;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("age must be a number");
    }
    if (value < 0 || value > 150) {
      throw new RangeError("age must be more than 0 and less than 150");
    }
    this._age = value;
  }

  getFullName() {
    return `${this._firstname} ${this._lastname}`;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}
try {
  const user = new User("Nick", "Wilsher", 23, true, "nick@gmail.com", true);
  console.log(user);
  console.log(user.getFullName());
  console.log(User.isUser(user));
  user.age = "18";
  console.log(user);
} catch (error) {
  console.log(error);
}

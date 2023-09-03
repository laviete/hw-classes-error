const a = 10;
console.log("a >>", a);
try {
  const c = a + b;
} catch (error) {
  console.log("error >>", error);
}
console.log("message after error");

function factorial(n) {
  if (typeof n !== "number") {
    throw new Error("n must be a number");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
try {
  console.log(factorial(7));
} catch (error) {
  console.log("error >>", error);
}
console.log("message after error");

function validateName(name) {
  if (typeof name !== "string") {
    throw new TypeError("name must be a string value");
  }
  if (name.length < 4 || name.length > 32) {
    throw new RangeError("name must be less than 32 and more than 4");
  }
  return name;
}
try {
  console.log(validateName("Nick"));
  console.log(validateName("Tom"));
} catch (error) {
  console.log(error);
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("age must be a number");
  }
  if (age < 0 || age > 150) {
    throw new RangeError("age must be a positive number and less than 150");
  }
  return age;
}
try {
  console.log(validateAge("abc"));
} catch (error) {
  if(error instanceof RangeError){
    console.log('RangeError');
  }
  else if(error instanceof TypeError){
    console.log('TypeError');
  }
}
console.log(validateAge(19));



function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
const f4 = factorial(10);
console.log('f4 >>',f4);


function brackets(n) {
  if (n === 0) {
    return;
  }
  console.log("(");
  brackets(n - 1);
  console.log(")");
}
brackets(2);

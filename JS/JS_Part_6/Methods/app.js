const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
console.log(calculator.num);
console.log(calculator.add(1,2));
console.log(calculator.sub(54,34));
console.log(calculator.mul(2,5));


// Method (Shorthand)

const calculators = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};
console.log(calculators.add(1, 2));
console.log(calculators.sub(54, 34));
console.log(calculators.mul(2, 5));
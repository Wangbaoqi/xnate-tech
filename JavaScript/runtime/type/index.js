
// number 

const num = .1 + .2;

console.log(num === .3);

console.log(Number.isNaN(num));
console.log(Number.isNaN('foo'));
console.log(Number, isNaN('foo'));

const n = 85.125

const n1 = 85;
const n2 = 0.125;

const b_n1 = n1.toString(2); // 1010101
const b_n2 = n2.toString(2); // 0.001

const b_n = 1010101.001;

const b_n_e = 1.010101001 * 2 ^ 6;

const sign = 1;

// singlePrecision

const exponent = 127 + 6;  // 133 == 10000101
const mantisa = 010101001;

const singlePrecision = '0 1000010 01010100100000000000000'

// doublePrecision

const exponent1 = 1023 + 6; // 1029 == 10000000101
const mantisa1 = 010101001;

const doublePrecision = '0 10000000101 0101010010000000000000000000000000000000000000000000'

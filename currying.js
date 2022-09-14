const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b; //two funcs

const multiplyBy5 = curriedMultiply(5);

compose(sum, sum)(5);

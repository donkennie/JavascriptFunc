//compose is the act of putting two functions together
//to form a third function, where the output
//of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

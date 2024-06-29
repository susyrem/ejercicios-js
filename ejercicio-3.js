// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
const product = numbers.reduce((acumulator, currentValue) => acumulator * currentValue, 1);
console.log("La sumatoria del arreglo [1, 2, 3, 4] es: " + sum);
console.log("El producto del arreglo [1, 2, 3, 4] es: " + product);
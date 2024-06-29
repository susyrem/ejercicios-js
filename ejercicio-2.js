//Write a function that:
//•	Takes in an array of numbers.
//•	Doubles the value of each number in the array.
//•	Prints out the new updated array.
//Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

const doubleValue = ( currentValue )=>{
    return currentValue * 2;
}

const value = [1, 2, 4, 5] ;

const doubleNumbers = value.map( doubleValue );
console.log( doubleNumbers );


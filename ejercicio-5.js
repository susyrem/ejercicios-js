
// For each of the exercises below, assume you are starting with the following people array.
// let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// 1.	Write a command that prints out all of the people in the list.
const names = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    console.log(names);

// 2.	Write the command to remove "Dani" from the array.
const pos = names.indexOf("Dani"); 
const remove = (names.splice(pos, 1));  
console.log(names);

// 3.	Write the command to remove "Juan" from the array.
const pos1 = names.indexOf("Juan"); 
const remove1 = (names.splice(pos1, 1));  
console.log(names);

// 4.	Write the command to move "Luis" to the front of the array.
const pos2 = names.indexOf("Luis"); 
const remove2 = (names.splice(pos2, 1));  
names.unshift("Luis");
console.log(names);

// 5.	Write the command to add your name to the end of the array.
names.push("Susy");
console.log(names);

// 6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for ( let i = 1; i < names.length; i++) {
    console.log(names[i]);
    if (names [i] === "Maria") break;
    }

// 7.	Write the command that gives the indexOf where "Maria" is located.
let indexMaria = names.indexOf("Maria");
console.log(indexMaria);

// At the end of the exercise, there should be 4 people in the array.

console.log(names.length);




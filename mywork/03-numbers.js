/*

## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score

4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message

*/

// const score1 = 30;
// const score2 = 44;
// const score3 = 90;

// const totalScore = score1 + score2 + score3;
// const averageScore = totalScore / 3;

// console.log(`total score = ${totalScore} and average score = ${averageScore}`);
// const plates = 20;
// const people = 7;
// const remainingPlates = plates % people;
// const message = `There are ${remainingPlates} plates available`;
// console.log(message);

// const randomNumber = Math.floor(10 * Math.random());
//console.log(randomNumber);

//datatypes

//string
// const someText = "someText";

//number
// const number = 45.9;

//boolean
// const light = false;

//Null
// const result = null;

//Undefined
// let name;

//Symbol(ES6)

// console.log(typeof name);

//datatypes

// document.querySelector(".form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = parseInt(document.getElementById("value").value);
//   const randomNumber = Math.floor(10 * Math.random());
//   console.log(`${randomNumber} + ${value} = ${randomNumber + value}`);
// });

//arrays
const friend1 = "anna";
const friend2 = "anna";
const friend3 = "anna";
const friend4 = "anna";

const friends = ["jhon", "peter", "bob", "susy", 45, undefined, null];
friends.forEach((_, index) => {
  friends[index] = 8;
});
console.log(friends);

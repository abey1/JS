/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

let person1 = { name: "depp", age: 20, stat: "resident" };
let person2 = { name: "amber", age: 17, stat: "tourist" };

function check(person) {
  if (person.age > 18 && person.stat === "resident") {
    console.log("passed");
  } else {
    console.log("failed");
  }
}

check(person2);

//switch statment practice roll dice 07-conditionals

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   document.querySelector("form input").value =
//     Math.floor(6 * Math.random()) + 1;
//   switch (parseInt(document.querySelector("form input").value)) {
//     case 1:
//       console.log("you rolled one");
//       break;
//     case 2:
//       console.log("you rolled two");
//       break;
//     case 3:
//       console.log("you rolled three");
//       break;
//     case 4:
//       console.log("you rolled four");
//       break;
//     case 5:
//       console.log("you rolled five");
//       break;
//     case 6:
//       console.log("you rolled six");
//       break;
//     default:
//       console.log("i dont know what you rolled");
//   }
// });

// const num1 = "9";
// const num2 = 9;

// if (num1 !== num2) {
//   console.log(num1, "and", num2, "are not equal");
// } else {
//   console.log(num1, "and", num2, "are equal");
// }

// if (num1 > num2) {
//   console.log(num1, "is bigger than", num2);
// } else if (num1 < num2) {
//   console.log(num1, "is less than", num2);
// } else {
//   console.log(num1, "and", num2, "are equal");
// }

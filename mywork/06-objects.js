/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

const car = {
  make: "BMW",
  model: "101",
  year: 1999,
  color: ["black", "white", "dark blue"],
  hybrid: true,
  drive: () => console.log("driving..."),
  stop: () => console.log("stopping..."),
};

console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();

/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//Evaluates the string and returns the int value explicitly
let result = parseInt("5") - 2;
console.log("The result is: " + result);

//Removed quotations, "false" is a truthy value
let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
//Casts to Number explicitly
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

//Implicit conversion
if(NaN){
  console.log("This won't run because 'NaN' is evaluated as a falsy value");
}

//Explicit conversion
//Before casting
let shouldBeANumber = "5";
let isActuallyANumber = 17;

console.log(isActuallyANumber + shouldBeANumber); // prints 175 when it should print 22

//Casting the string to a number
shouldBeANumber = Number(shouldBeANumber);
console.log(isActuallyANumber + shouldBeANumber);
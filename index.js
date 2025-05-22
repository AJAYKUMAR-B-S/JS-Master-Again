/*
let js = "amazing";
// if (js === "amazing") alert("js is fun");

console.log(44 + 30 - 9);

// Learning About Values And variables
// FOR VARIABLES WE  CAN'T USE RESERVE WORDS AND SHOULD NOT START WITH NUMBER
// ONLY UPPER CASE USED FOT CONSTANT VALUES
// USE PROPER MEANING FULL VARIABLE NAME

let PI = 3.1415;

let job1 = "programmer";
let job2 = "teacher";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
let firstName = "Ajay";

console.log(firstName);

console.log(firstName);

console.log(firstName);


let isFun = true;

console.log(true);
console.log(isFun);

console.log(typeof true);
console.log(typeof isFun);
console.log(typeof 44);
console.log(typeof "Ajay");

// LEARNING ABOUT DYNAMIC TYPING MEANS WE WON'T TELL THE DATA TYPES THIS IS STRING, NUMBER, BOOLEAN IT WILL FIGURE IT OUT ITSELF
let firstName = "Kumar B S";
console.log(firstName);
firstName = false;
console.log(firstName);

// UNDEFINED AND NULL AND TYPE OF

let email;
console.log(email); //undefined means the variable don't hold any value
console.log(typeof email);

let newEmail;
console.log(newEmail);
console.log(typeof newEmail);
console.log(typeof null);
*/

// let/const/var  in JS

/*
const age = 45;
console.log(age);

// age = 56; WE WILL GET TYPEERROR IF WE REASSIGN VALUE FOR const

const firstName = "AJAY"; // THIS WILL DISPLAY THE VALUE WHICH IS INSIDE THE VARIABLE
// const lastName;  we will get syntax error

var email = "gmail.com";

console.log(email);


*/

/*
//BASIC OPERATORS IN JS

const order = 1;
console.log(order + 4);

console.log(4 * 3);
console.log(3 ** 4);
// 3*3*3*3

const now = 2025;
const birthYear = 2000;

console.log(now - birthYear);

console.log(now - 2001);
*/

// ASSIGNMENT OPERATORS

/*
let x = 5 + 1;

console.log(x);

x += 8;
x *= 2;
x++;
x--;
x--;
console.log(x);

// COMPARISON OPERATORS

const age = 23;
const birthYear = 2000;
const now = 2025;

console.log(now - birthYear >= age);

*/

//STING AND TEMPLATE STRINGS

/*
console.log("This is simple string");

const firstName = "AJAY";
const job = "Teacher";
const birthYear = 2001;
const currentYear = 2025;

const personFullDetail =
  "I am " +
  firstName +
  " I am a " +
  job +
  " and my age is " +
  (currentYear - birthYear);
console.log(personFullDetail);

const personFullDetails = `I am ${firstName} currently i am ${job} and my age is ${
  currentYear - birthYear
}`;

console.log(personFullDetails);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

/*
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})`);
} else {
  console.log(`john's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
  /*
/*
*/

//type conversion
/*
let userNumberInput = "897546214";

console.log(userNumberInput);
const countryCode = "+91";
console.log(`${Number(countryCode)} ${userNumberInput}`);

console.log(Number("Ajay"));

//type coercion

const age = 90;
console.log("ajay " + age + " years old ");
*/

//Truthy and falsy values
//There are Five Falsy values is there in jS remain everything is Truthy value those are
//->undefined
//Empty string " "
//->NAN(Not a Number)
//->0

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

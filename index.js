"use strict";

// const { use } = require("react");

// const { use } = require("react");

let hasDriverLicense = false;
const hasDriverHasGoodVision = true;

if (hasDriverHasGoodVision) {
  hasDriverLicense = true;
}

// console.log(`Driver ${hasDriverLicense ? "will" : "Won't"} get the license`);

let js = "amazing";
// if (js === "amazing") alert("js is fun");

// console.log(44 + 30 - 9);

// Learning About Values And variables
// FOR VARIABLES WE  CAN'T USE RESERVE WORDS AND SHOULD NOT START WITH NUMBER
// ONLY UPPER CASE USED FOT CONSTANT VALUES
// USE PROPER MEANING FULL VARIABLE NAME

let PI = 3.1415;

let job1 = "programmer";
let job2 = "teacher";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
let firstNameeee = "Ajay";

let isFun = true;

// console.log(true);
// console.log(isFun);

// console.log(typeof true);
// console.log(typeof isFun);
// console.log(typeof 44);
// console.log(typeof "Ajay");

// LEARNING ABOUT DYNAMIC TYPING MEANS WE WON'T TELL THE DATA TYPES THIS IS STRING, NUMBER, BOOLEAN IT WILL FIGURE IT OUT ITSELF
let firstNameeeee = "Kumar B S";
// console.log(firstNameee);
// firstName = false;
// console.log(firstNameee);

// UNDEFINED AND NULL AND TYPE OF

// let email;
// console.log(email); //undefined means the variable don't hold any value
// console.log(typeof email);

// let newEmail;
// console.log(newEmail);
// console.log(typeof newEmail);
// console.log(typeof null);

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

let x = 5 + 1;

// console.log(x);

x += 8;
x *= 2;
x++;
x--;
x--;
// console.log(x);

// COMPARISON OPERATORS

const agee = 23;
const birthYearrr = 2000;
const now = 2025;

// console.log(now - birthYearrr >= agee);

//STING AND TEMPLATE STRINGS

// console.log("This is simple string");

const firstName = "AJAY";
const job = "Teacher";
const birthYearr = 2001;
const currentYearr = 2025;

const personFullDetail =
  "I am " +
  firstName +
  " I am a " +
  job +
  " and my age is " +
  (currentYearr - birthYearr);
// console.log(personFullDetail);

const personFullDetails = `I am ${firstName} currently i am ${job} and my age is ${
  currentYearr - birthYearr
}`;

// console.log(personFullDetails);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})`);
// } else {
//   console.log(`john's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }

//type conversion

let userNumberInput = "897546214";

// console.log(userNumberInput);
const countryCode = "+91";
// console.log(`${Number(countryCode)} ${userNumberInput}`);

// console.log(Number("Ajay"));

//type coercion

const age = 90;
// console.log("ajay " + age + " years old ");

//Truthy and falsy values
//There are Five Falsy values is there in jS remain everything is Truthy value those are
//->undefined
//Empty string " "
//->NAN(Not a Number)
//->0

/*
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
*/

//Equality operator "==" & "==="

/*
const age = 25;
if (age == 25) {
  console.log("You should get Marry to someone Who has Loose mindset");
}

if (age === 25) {
  console.log("You should get Marry to someone Who has strict mindset");
}

const favoriteNumber = Number(prompt("Tell Me What Is Your Favorite Number"));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);
if (favoriteNumber === 25) {
  console.log("Good choice ! 25 is Good Number");
} else if (favoriteNumber === 34) {
  console.log("34 is also good choice");
} else if (favoriteNumber === 50) {
  console.log("Super number 50 is");
} else {
  console.log("Why not 34 25 50");
}

if (favoriteNumber !== 55)
  console.log("In Future You Should Choose 55 because It's a grate Number");

*/

//logical operator

const customerName = "AJAY";
const customerAge = 20;
const customerCreditScore = 750;
const isCustomerEarning = false;
const isCustomerHavePANCard = false;

if (customerAge > 20 && customerCreditScore > 740) {
  console.log(`${customerName} you are Eligible for Credit Card 🥳`);
} else if (isCustomerHavePANCard || isCustomerEarning) {
  console.log(
    "Please update your credit Score and age to apply to credit card"
  );
} else {
  // console.log(
  `Sorry ${customerName} we can't process further because we don't have enough information!, please update your details`;
  // );
}

//SWITCH STATEMENT

const day = "Mockday";

switch (day) {
  case "Monday":
    console.log("Learn JS ");
    break;
  case "Tuesday":
    console.log("Write JS Notes");
    break;
  case "Wednesday":
    console.log("Do Logical Exercises");
    break;
  case "Thursday":
    console.log("Go to Temple");
    console.log("Again practice JS Logical Problems");
  case "Friday":
    console.log("Give Mock test To Companies");
    break;
  case "Saturday":
    console.log("Take Rest");
  default:
    console.log("Invalid Day");
}

if (day === "Monday") {
  console.log("Learn JS ");
} else if (day === "Tuesday") {
  console.log("Write JS Notes");
} else if (day === "Wednesday") {
  console.log("Do Logical Exercises");
} else if (day === "Thursday" || day === "Friday") {
  console.log("Go to Temple");
  console.log("Again practice JS Logical Problems");
} else if (day === "Saturday") {
  console.log("Take Rest");
} else {
  console.log("Invalid Day");
}

//EXPRESSIONS AND STATEMENTS

//this is the statement

if (25 > 80) {
  console.log("25 is lesser than 80");
}

const userName = "Ajay";
const birthYear = 1990;
const currentYear = 2025;
// console.log(`${userName} is ${currentYear - birthYear} years old`);

let bill = 275;
const finalAmount = bill > 50 && bill < 300 ? bill / 15 : bill / 20;

// console.log(finalAmount + bill);

function printName() {
  console.log("My name is Ajay");
}

// //THis we will call as Invoking/calling/running
// printName();
// printName();
// printName();

//FUNCTIONS ARE BUILDING BLOCKS OF JS IT'S USED TO STORE AND REUSE THE CODE AS MANY TIME WE WANT.
//IN FUNCTION THERE ARE 'PARAMETERS" OR "ARGUMENTS" IT WILL TAKE THE INPUTS FROM FUNCTION AND PRINT IN CONSOLE OR RETURN
// THE MAIN USE CASE OF FUNCTION IS WE SHOULD NOT REPEAT THE CODE OR BRAKE THE DRY PRINCIPLE (DON'T REPEAT YOURSELF)

function fruitProcessor(numOfApples, numOfOranges) {
  // console.log(numOfApples, numOfOranges);
  const resultOfJuices = `Juice With ${numOfApples} Apples and ${numOfOranges} Oranges`;
  return resultOfJuices;
}

const finalResult = fruitProcessor(4, 3);
// console.log(finalResult);

// console.log(fruitProcessor(7, 1));

// FUNCTION DECLARATION AND FUNCTION EXPRESSION

function calcAge(birthYear) {
  return 2025 - birthYear;
}

// console.log(calcAge(2000));

const voterEligible = function (userName, birthYear, hasAdharCard) {
  const findAge = 2025 - birthYear;
  return `${userName} ${
    findAge > 18 && hasAdharCard === true
      ? `Is Eligible For Voter ID `
      : `Is Not Eligible For Voter ID Because He don't have AdharCard 
Please First Create Adhar Card`
  } `;
};
const findUserWillGetID = voterEligible("Ajay", 2007, true);
// console.log(findUserWillGetID);

//ARROW FUNCTIONS

const todaysTarget = (numOfCars) => numOfCars - 30;
// console.log(todaysTarget(202));

const EligibleForExam = (userAge, userBirthYear) => {
  const finalAge = 2025 - userBirthYear;
  return `${userAge} ${
    finalAge > 18
      ? "🥳 Is Eligible For This Exam "
      : "Sorry 😔, You Are Too Young For This Exam"
  }`;
};
// console.log(EligibleForExam("Ajay", 2006));

//FUNCTION CALLING ANOTHER FUNCTION

function giveDiscount(amount) {
  const finalDiscount = amount > 50 && amount < 200 ? amount / 20 : amount / 30;
  return finalAmount;
}

const hotelGrand = (userName, amountForDiscount) => {
  const discountAmount = giveDiscount(amountForDiscount);
  return `Congratulation ${userName} You Got ${discountAmount}% Discount and The Final Bill Will ${
    amountForDiscount - discountAmount
  }`;
};

// console.log(hotelGrand("John", 150));

// Arrays
//WHAT IS ARRAY : ARRAY IS A DATA STRUCTURE THAT CAN HOLD N NUMBER OF DIFFERENT TYPES OF DATA.
//ARRAYS ARE STARTS WITH 0 INDEX
const friendsName1 = "raju";
const friendsName2 = "rani";
const friendsName3 = "ravi";

//INSTEAD OF WE CAN STORE DIFFERENT DATA IN ONE VARIABLE USING ARRAYS

const differentFriendsNames = ["John", "Ram", "ravi"];

console.log(differentFriendsNames);

const numOfNumbers = new Array(40, 20, 45, 78);
console.log(numOfNumbers);
console.log(numOfNumbers[1]);
console.log(numOfNumbers[0]);
console.log(numOfNumbers[3]);
console.log(numOfNumbers[9]);

console.log(numOfNumbers[numOfNumbers.length - 1]);
console.log(numOfNumbers.length);
console.log(numOfNumbers.length - 1);

const differentValues = ["Ajay", 2003, true, ["Bangalore", "Birur", "Kadur"]];
console.log(differentValues);

const ages = [1991, 2003, 1963, 1999];
const calcAges = (birthYear) => 2025 - birthYear;

const calcAgeResultArray = [
  calcAges(ages[0]),
  calcAges(ages[ages.length - 1]),
  calcAges(ages[2]),
];

// console.log(calcAgeResultArray);

// console.log(ages);
ages[3] = "randome";
// console.log(ages);

//WE LEARNT THAT IF WE DECLARE CONST WE CAN'T REASSIGN THE VALUE RIGHT BUT THE ABOVE CODE ARRAY IS TAKING HOW?
//THE ANSWER IS IN JAVASCRIPT ONLY PRIMITIVE VALUES ARE IMMUTABLE(WE CAN' CHANGE THE VALUES) APART THAT DATA STRUCTURE LIKE ARRAY ARE MUTABLE WE CAN'T DO LIKE BELOW CODE

// ages = [45, 42]; This will give an error

// ARRAY METHODS
//PUSH METHOD = IT WILL ADD THE VALUE TO THE END OF THE ARRAY

ages.push("newAge");
console.log(ages);

//POP METHOD  = IT WILL REMOVE THE END OF THE VALUE OF ARRAY
ages.pop();
console.log(ages);

//UNSHIFT = IT WILL ADD THE VALUE TO THE BEGINNING OF THE ARRAY

ages.unshift("newOne");
// console.log(ages);

// SHIFT  = IT WILL REMOVE FIRST VALUE OF ARRAY IT ALSO RETURN REMOVED VALUE FROM ARRAY
// console.log(ages.shift());

//PUSH METHODS WILL RETURN LENGTH OF NEW ARRAY
// console.log(ages.length);
const newLengthOfArray = ages.push("TestingTest");
// console.log(newLengthOfArray);

//POP METHOD WILL RETURN THE REMOVED VALUE FROM ARRAY
// console.log(ages.pop());
//
//INDEXOF METHOD = IT WILL RETURN THE INDEX OF VALUE
//SUPPOSE IF THE VALUE IS NOT EXISTS IN THE CURRENT ARRAY THEN THE INDEXOF WILL RETURN THE -1 VALUE
// console.log(ages.indexOf(19638));

//INCLUDEs METHOD = IT WILL CHECK IF THE VALUE EXISTS IN CURRENT ARRAY OR NOT AND RETURN THE BOOLEAN VALUE
// console.log(ages);
// console.log(ages.includes("2000"));
if (ages.includes("randome")) {
  // console.log("This array is containing the above value");
}

// OBJECTS
// WHAT IS OBJECTS : OBJECTS ARE DATA STRUCTURE SO WE CAN STORE THE DIFFERENT TYPE OF DATA IN KAY VALUE PAIR

const personArray = {
  firstName: "Ajay",
  lastName: "kumar",
  birthYear: 2025 - 1998,
  job: "Coder",
  friends: ["rani", "ravi", "raju"],
};

// console.log(personArray);

// dot and bracket notation to access the values of objects

// console.log(personArray.firstName);
// console.log(personArray.lastName);

const repeatWord = "Name";
// console.log(personArray["first" + repeatWord]);

// const userInput = prompt(
//   `What do you want to know this person. choose between this
//    1)firstName
//    2)LastName
//    3)job
//    4)birthYear
//    5)friends`
// );

// console.log(personArray[userInput]);

personArray.location = "Bangalore";
personArray["youtube"] = "@JS.com";

// console.log(personArray);

// console.log(
//   `${personArray.firstName} has ${personArray.friends.length} friends, and his best friend is called ${personArray.friends[0]}`
// );

// this keyword : this is a keyword that will point to the current object

const personArray1 = {
  firstName: "Ajay",
  lastName: "kumar",
  birthYear: 2000,
  job: "Coder",
  hasDriverLicense: false,
  friends: ["rani", "ravi", "raju"],
  // ageFinder: function (birthYear) {
  //   console.log(this);
  //   return 2025 - this.birthYear;
  // }
  ageFinder: function (birthYear) {
    this.finalAge = 2025 - this.birthYear;
    return this.finalAge;
  },
  finalSummary: function () {
    return `${this.firstName} is a ${this.finalAge}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? `a` : `No`} driver license`;
  },
};

// console.log(personArray1.ageFinder());

// console.log(personArray1.finalAge);
// console.log(personArray1.finalSummary());

//for loop : It Will run until the condition is true

// console.log("Lifting Weights 1 time");
// console.log("Lifting Weights 2 time");
// console.log("Lifting Weights 3 time");
// console.log("Lifting Weights 4 time");
// console.log("Lifting Weights 5 time");
// console.log("Lifting Weights 6 time");
// console.log("Lifting Weights 7 time");
// console.log("Lifting Weights 8 time");
// console.log("Lifting Weights 9 time");
// console.log("Lifting Weights 10 time");

for (let i = 0; i <= 10; i++) {
  // console.log(`Lifting Weights ${i} time`);
}
const personArray2 = [
  "Ajay",
  "kumar",
  2025 - 1998,
  "Coder",
  ["rani", "ravi", "raju"],
];

for (let i = 0; i < personArray2.length; i++) {
  // console.log(personArray2[i]);
}

const ageArray = [1990, 1980, 2000, 2004, 2003];

const finalAgeArray = [];
// for (let i = 0; i < ageArray.length; i++) {
//   finalAgeArray.push(2025 - ageArray[i]);
// }
// console.log(finalAgeArray);

//continue and break keywords

for (let i = 0; i < personArray2.length; i++) {
  if (typeof personArray2[i] !== "string") continue;
  // console.log(typeof personArray2[i], personArray2[i]);
}
// console.log(finalAgeArray);

const userData = [
  "Raju",
  2025 - 1993,
  true,
  "Bangalore",
  ["Ravi", "Suma", "Guna", "john"],
];

const filterString = [];
const filterOtherThanString = [];

for (let i = 0; i < userData.length; i++) {
  if (typeof userData[i] === "string") break;
  console.log(userData[i], typeof userData[i]);
}

// console.log(filterOtherThanString);

//Printing The Array In Reverse

for (let i = userData.length - 1; i >= 0; i--) {
  console.log(userData[i]);
}

//Using For Loop inside for loop

// for (let i = 1; i < 4; i++) {
//   console.log(`Starting the Exercise num ${i}
//     ----------------------------------------`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`lifting the Exercise num${i} ${j} Times`);
//   }
// }

//While loop

// let randomeNum = Math.trunc(Math.random() * 6) + 1;

// while (randomeNum !== 6) {
//   console.log(`you rolled the dice ${randomeNum} time`);
//   randomeNum = Math.trunc(Math.random() * 6) + 1;
//   if (randomeNum === 6) {
//     console.log(`You rolled ${randomeNum}`);
//   }
// }

console.log(23 - "45" + true + "java");

console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(false == 0); // true (false becomes 0)
console.log(null == undefined); // true (special case)

const value = 20;

const newAge = 14;

if (newAge >= 18) {
  // console.log(`Congrats your Eligible for voting`);
} else if (newAge < 15) {
  // console.log(
  // `you are less than 15 please make sure you have an adharcard for voterId`
  // );
} else {
  // console.log(`Sorry :( you have to wait ${18 - newAge} years to vote`);
}

const newTernAge = 14;
const eligibleForVoteOrNot =
  newTernAge >= 18
    ? `Congrats your Eligible for voting`
    : newTernAge < 15
    ? `you are less than 15 please make sure you have an adharcard for voterId`
    : `Sorry :( you have to wait ${18 - newAge} years to vote`;

// console.log(eligibleForVoteOrNot);

/*
'use strict';

let hasDriverLicense = false;

let passTest = true;

if (passTest ) {
    hasDriverLicense = true;
}
if (hasDriverLicense) {
    console.log('I can drive :D');    
}
//const interface = 'Audio';
//const private = 534;
*/

//Functions

// function logger (){
// console.log('My name is Ahmed');
// };

//process of calling the function : invoking , running , calling //the function
/*
logger();
logger();
logger();

function fruitProcessor(apples , oranges) {
    console.log(apples , oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
};

const applesJuice = fruitProcessor(5, 0);

console.log(applesJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);


const num = Number('23');
console.log(num);

*/

/*

//ways to write functions

//function declaration.


function calcAge1 (birthYear){
    return  2037 - birthYear;
};


 const age1 = calcAge1(2003);
console.log(age1);

//function expression

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;    
};


const age2 = calcAge2(2003);

console.log(age1, age2);

*/

//Arrow function

/*
const calcAge3 = birthYear=> 2037 - birthYear;

const age3 = calcAge3(2003);


console.log(age3);


const yearsUntillRetirement = (birthYear, firstname)=>{
const age = 2037 - birthYear;
const retirement = 65 - age;
//return retirement;
return `${firstname} retires in ${retirement} years`;
};

console.log(yearsUntillRetirement(2003, "Ahmed"));

console.log(yearsUntillRetirement(1980, "BoB"));
*/

//calling function inside function

/*

function cutFruitPieces (fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
const applePeices = cutFruitPieces(apples);

const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePeices} peice of apples and ${applePeices} peice of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));


*/

//Reveiwing Functions

/*


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

function yearsUntillRetirement(birthYear, firstname)  {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
 //  return `${firstname} retires in ${retirement} years`;

 if (retirement > 0) {
     console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    
 }else {
  return -1;
  console.log(`${firstName} has  already retired`);
    
} 

};

console.log(yearsUntillRetirement(2003, "Ahmed"));
 
console.log(yearsUntillRetirement(1970, "Mike"));

*/

//Arrays

/*

const freind1 = 'Michael';

const friend2 = 'Steven';

const freind3 = 'Peter';

const freinds = ['Michael', 'Steven', 'Peter'];

console.log(freinds);


console.log(freinds[0]);

console.log(freinds[2]);

console.log(freinds.length);


console.log(freinds[freinds.length - 1]);


freinds[2] = 'Jay';

console.log(freinds);

//freinds = ['Bob', 'Alice'];

const firstName = 'Ahmed';

const ahmed = ['Ahmed','Ibrahim', 2037 - 2003 , 'teacher',
    freinds
];
console.log(ahmed);

console.log(ahmed.length);






//Exercise

const calcAge = function (birthYear) {return 2037 - birthYear;        
};

const years = new Array(1991, 1984, 2008,2020);

const age1 = calcAge(years[0]);

const age2 = calcAge(years[1]);

const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

*/

/*

const freinds = ["Michael", "Steven", "Peter"];


//Add elements
const newLength = freinds.push("Jay");


console.log(freinds);

console.log(newLength);

freinds.unshift('John');

console.log(freinds);

//Remove elements


freinds.pop();

const popped = freinds.pop();

console.log(popped);

console.log(freinds);

//remove first elements 

freinds.shift();
console.log(freinds);

//get index of element
console.log(freinds.indexOf('Steven'));

console.log(freinds.indexOf("Bob"));

//check if the element is exist

console.log(freinds.includes("Steven"));

console.log(freinds.includes("Bob"));


//does not type coertion
freinds.push(23);
console.log(freinds.includes("23"));

if (freinds.includes('Steven')) {
    console.log('You have a freind called Peter');  
};

*/

/*
//Objects


const ahmedArray = [
    'Ahmed',
    "ibrahim",
    2037 - 2003 ,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


//creating an object
const ahmed = {
firstName : 'Ahmed',
lastName : 'Ibrahim',
age : 2037 - 2003,
freinds : ['Machael','Peter', 'Steven'],
};

*/

// Dot VS Bracket Notation

const ahmed = {
  firstName: "Ahmed",
  lastName: "Ibrahim",
  age: 2037 - 2003,
  job : 'teacher',
  freinds: ["Machael", "Peter", "Steven"],
};


console.log(ahmed.lastName);

console.log(ahmed['lastName']);

//Bracket notaion can you using Expressions inside it 

const nameKey = 'Name';

console.log(ahmed['first'+ nameKey]);

console.log(ahmed["last" + nameKey]);

// console.log(ahmed.'last' + nameKey);


const interestedIn = prompt("What do you want to know about Ahmed ? choose between firstName, lastName, age , job, and friends");

//ahmed.interestedIn ==> undefined why ? because ahmed object don't have an property called interestedIn

console.log(ahmed[interestedIn]);


if (ahmed[interestedIn]) {
    console.log(ahmed[interestedIn]);
    
}else console.log(
  "Wrong request! choose between firstName, lastName, age , job, and friends",
);

ahmed.location = "Egypt";
ahmed['twitter'] = '@ahmedIbrahim';
console.log(ahmed);

//Challenge
//'Ahmed has 3 freinds, and his best freind is macheal'

console.log(`${ahmed.firstName} has ${ahmed.freinds.length} friends, and his best freind is ${ahmed.freinds[0]}`);



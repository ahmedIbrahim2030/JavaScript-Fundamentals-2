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







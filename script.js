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

function logger (){
console.log('My name is Ahmed');
};
    
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





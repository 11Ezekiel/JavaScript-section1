/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10)

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jones');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let are used for variables that can be re-assignes
let age = 30;
age = 31;

// const are variables that cam not be re-assignes
const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


// This are Mathematics operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Nelson';
const lastName = 'Ezekiel';

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 25
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x);

// Comparison operators : used to produce boolean values
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


// Challenges 1
/*const markMass = 78, markHeight = 1.69;
const johnMass = 92, johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);



const markMass = 95, markHeight = 1.88;
const johnMass = 85, johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;


console.log(markBMI, johnBMI, markHigherBMI);



const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);


// Template strings literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('Just a regular string...');

// Multi line strings
console.log('string with \n\
multiple \n\
lines');

// Modern ways for multi line strings
console.log(`String
multiple
lines`);


// if else statement
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license  🚘`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :`)
}

const birthYear = 2012;

let centuary;
if (birthYear <= 2000) {
    centuary = 20;
} else {
    centuary = 21;
}
console.log(centuary);


// Challenge 2
const markMass = 78, markHeight = 1.69;
const johnMass = 92, johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI)


if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}



const markMassNew = 95, markHeightNew = 1.88;
const johnMassNew = 85, johnHeightNew = 1.76;

const markBMINew = markMassNew / markHeightNew ** 2;
const johnBMINew = johnMassNew / (johnHeightNew * johnHeightNew);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMINew}) is higher than John's (${johnBMINew})`);
} else {
    console.log(`John's BMI (${markBMINew}) is higher than Mark's (${johnBMINew})`)
}


// console.log(markBMI, johnBMI, markHigherBMI);


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


//Type coercion
console.log('I am ' + 23 + 'years old');
console.log('I am ' + '23' + 'years old');
console.log('23' - '10' - '3');
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // The + operator gives a string, '11'
n = n - 1; // while the - operator changes the string to a number 10
console.log(n);


// 5 faulty values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job!");
}

const realMoney = 100;
if (realMoney) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}

let newHeight = 123;
if (newHeight) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}

let theNewHeight = 0;
if (theNewHeight) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}


// Difference btw ==(loosed equality operator) & ===(strict equality operator)

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

18 === 18 // true

18 === 19 // false

'18' == 18 //true

'18' === 18 // false

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?')



// Logical operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}



// Challenge 3
// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas) {
//     console.log('Dolphins wins the Trophy!')
// } else if (koalas > dolphins) {
//     console.log('Koalas wins the Trophy!')
// } else if (dolphins === koalas) {
//     console.log('Both win the Trophy!')
// }

// Bonus 1

const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;
console.log(dolphins, koalas);

if (dolphins > koalas && dolphins >= 100) {
    console.log('Dolphins wins the Trophy!')
} else if (koalas > dolphins && koalas >= 100) {
    console.log('Koalas wins the Trophy!')
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log('Both win the Trophy!')
} else {
    console.log('No one wins the Trophy')
}



// The Switch Statement

const day = 'friday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('Record Videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;

    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}



// The conditional (Tenary) operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

// Expression produces a result, while a statement translates to actions produced

// A Declaration is like a complete sentence while a Expression are like the words that make up the sentence

//Challenges 4

// let tip1 = X <= 300 && > 50;
// let tip2 = Y >= 300;

// if (X >= 50 && <= 300) {
//     console.log(tip1 = (X * 0.15));
// } else if (Y >= 300) {
//     console.log(tip2 = (Y * 0.2));
// } else {
//     console.log('Nothing!')
// }

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
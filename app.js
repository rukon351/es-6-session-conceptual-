// 1.  What is Es6 & why we should use it?

// 2. let
/* var myName = "Programming Hero";
let myName = 'Programming Hero'; */

// --- Redeclare kora jabena.
// --- Declare korar age define kora jabena.
// ---Block scope feature

/* let x = 10;
{
    let x = 2;
    console.log('Inside block', x);
}
console.log('Outside block', x); */


// 3. const
// --- connot reassign
// --- has other feature of let
// const age = 45
// age = 56
// console.log(age);


// 4. Template Literal

/* let name = 'Nazrul';
let message = 'How are you?';
// old way
// let fullMessage = "Hello " + name + ', ' + message;
let fullMessage = `Hi, ${name}, ${message}`;
console.log(fullMessage); */


// 5. Arrow Function

// function sum(a, b) {
//     let result = a + b;
//     return result;
// }
// let result = sum(10, 15);
// console.log(result);

/* const sum = (a, b, c) => {
    let sum1 = a + b;
    let sum2 = a + c;

    return sum1;
};
const result = sum(10, 21, 34);
console.log(result); */


// 6. Array Destructuting

/* let myVehicles = ['Toyota', 'Yamaha Bike'];

const [car, bike] = myVehicles;

console.log(bike); */

/* const firstCar = myCars[0];
const secondCar = myCars[1]; */



// 7. Spread Operator

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
const newArray = [...arr2];
// console.log(newArray);
console.log(...arr1, ...arr2); */



// 8. The For/of Loop

/* const numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i++) {
//    // console.log(numbers[i]);
// }


for (let number of numbers) {
    console.log(number);
} */


// 9. Default Parameter Values

// function welcomeMessage(name = 'Hero') {
//     let message = `Hi ${name}, welcome to this session!`
//     console.log(message);
// }
// welcomeMessage('Khalil');


/* const func = (name = 'Hero') => `Hi ${name}, Welcome to this session!!`;

const message = func();
// console.log(message);

const fullName = (firstName = 'Hero', secondName = 'Alom') => `Hi dear, ${firstName}, Welcome to this session!! and your full name is ${secondName}!!`;

const fullMessage = fullName();
console.log(fullMessage); */


// 10. Map, filters, find

// const myArr = ['Naymur', 'Alamin', 'Niloy'];

// let myNewArr = [];
// for (let number of myArr) {
//     let trippled = number * 3;
//     myNewArr.push(trippled);
// }

// console.log(myNewArr);

// const trpledArr = myArr.map(name => `Hello ${name}, How are you?`);
// console.log(trpledArr);

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filterArr = [];

// for (number of newArr) {
//     if (number % 2 == 0) {
//         filterArr.push(number);
//     }
// }
// console.log(filterArr);

// const filterArr = newArr.filter(number => number % 2 != 0);
// console.log(filterArr);

/* const newArr = ['Faysal', 'Arfan', 'Meraj', 'Tanim'];

const found = newArr.filter(name => name.length % 2 != 0);
console.log(...found); */



//  spread operator with object

/* const phone = {
    brand: 'Walton',
    color: 'Red',
}

const phoneExtra = {
    Cemera: '500 mp',
    battery: '20000mah',
}

const fullPhoneDetails = { ...phone, ...phoneExtra };
console.log(fullPhoneDetails) */


// optional chaining

/* const numbers = {
    second: {
        // new: 2,
        old: 3,
    },
}

console.log(numbers?.second?.new); */


// 5. Arrow Function

function sum(a, b) {
    let result = a + b;
    return result;
}
let result = sum(10, 15);
// console.log(result);

const myArrowFunc = (a, b) => a + b;
console.log(myArrowFunc(10, 15));
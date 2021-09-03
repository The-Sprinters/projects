console.log("Hello Guys welcome to function in JS");

// Functions


// function login(username, password) {
//     // Login Logic
//     console.log(password);
//     console.log(`${username} Login in successfully!`);
// }
// login('Prateek', '04062001');



// function upperCase(str){
//     console.log(str.toUpperCase());

//     // if You wnat to return something
//     return str.toUpperCase();
// }

// const result = upperCase('hello bhai kaisa hai');
// console.log(result);

// upperCase('javascript');



// const x = getMulti(10,2);
// document.getElementById("demo").innerHTML = x;

// function getMulti(a,b){
//     return a * b
// }




//  ---***Calculate Area***----


// Default Values

// function calculateArea(width, height) {

//     height = height === undefined ? 2 : height;

//     // return width * height;
//     const area = width * height;
//     return area;
// }

// const area = calculateArea(10);
// console.log(area);



//  ****---Variable Scope----****

/*
function download() {
    // Download Logic ...
    const fileName = 'xyz.pdf';
    console.log(fileName);
}

download();

*/


// ***---function decration & function expression---***


// 1. function decration

// function login(){

// }


// 2. function expression

// Note: This is an ananomous function

// const login = function () {
//     console.log('Login in Successfully');
// }

// login();


// Callback Function

// function formatText(text){
//     return text.toUpperCase();
// }

// const result = formatText('hello javascript');
// console.log(result);

/*
const formatText = (text, formatCB) => formatCB === 'function' ? formatCB(text) : text.toUpperCase();

// Note: charAt is a method of string to get a character

// Can't use arrow function in callback

const result = formatText('PRATEEK', function (text) {
    return text.charAt(0).toLowerCase() + text.slice(1);
});

console.log(result);
*/


// IIFE (Immediately invoked function expression)


// (function setUp() {
//     console.log('SetUp done Successfully!');
// })();


// Arrow Function


// 1: Normal function Expression

// const login =  function(){
//     console.log('Login successfully!');
// }

// const login = (username) => {
//     console.log(`${username}Login successfully!`);
// }

// login('Tejas ');

// const prateek = () => {
//     console.log("sdddsdsd")
// }

// prateek();





// ***---Adddion of Two Number---***



// const getSum = (num1, num2) => num1 + num2;

// const result = getSum(4, 6);
// console.log(result);  


// Good Practices

/*
1: Namimg
ex: getSum, showUser ---> Start with Varb



2: one function one Action



3: function Name shouble be decriptive

// ***__wwrong method___

function a(){
    console.log('Hello Amruta');
}
a();

*/


const heading = document.querySelector('#heading');

heading.addEventListener('click', function () {
    heading.innerHTML = 'Agrawal Code Wale!!!';
})

heading.addEventListener('dblclick', function () {
    heading.innerHTML = 'Welcome to JavaScript is Awesome!';
})
//1. Create a variable multiply and assign a function to this variable that multiplies two numbers. call this method from the variable.
let multiply = (num1,num2) => num1*num2;
// console.log(multiply(10,50));

// console.log(multiply(10,30));

//2. Create a function runTwise that takes a function as a parameter and then runs that method twise.
let greed = () => console.log("Hello");

const runTwise = inputFunction =>{
    inputFunction();
    inputFunction();
 }

// runTwise(greed);


//Create a button which should grow double in size on clicking after 2 seconds.

// const buttonSize = () =>{
//     let button = document.querySelector('.btn');
//     button.classList.toggle('size-double');
//  }

 

//using event listener
// let button = document.querySelector('.btn');
// button.addEventListener('click', event =>{
//     setTimeout(buttonSize, 5000)
// })
 

//5. Create a function that sums an array of numbers. Do this using a for-each loop.

let arr = [10,20,30,40,50];
let arrSum = 0;
 arr.forEach((num) =>{
    arrSum += num;
} );

//  console.log(arrSum);

 //6. Create a function that takes an array of numbers and return therir squares using map function.

 let nums = [1,2,3,4,5];
 let sqrNum = nums.map(num =>{
    return num * num;
 })

//  console.log(sqrNum)

 // Using reduce method;
 const sum = nums.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
 },0);
//  console.log(sum)

// another example
const numbers = [10, 5, 20, 15, 30];
const max = numbers.reduce((maxValue, currentValue) => {
    if (currentValue > maxValue) {
        return currentValue;
    } else {
        return maxValue;
    }
}, numbers[0]); // Initialize maxValue with the first element of the array

console.log(max); // Output: 30

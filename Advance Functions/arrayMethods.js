// Filter Method:

let arr = [1,2,3,4,5,6,7,8,9];

// filer odd numbers

let odds = arr.filter((num, index) =>{
    if( num % 2 === 1){
         return true;
    } else{
        return false;
    }
 });
let even = arr.filter((num, index) => num % 2 === 0);

// console.log(even);

// Map method: 
let newArr = [1,2,3,4,5,6,7,8,9];
let sqr = newArr.map((num) =>{
    return num * num;
});

// console.log( sqr);

let arr = [5,6];
arr.unshift(4);
arr.push(7)
// console.log(arr)

let arr1 = [2,4,5,1,6,7,8];
// console.log(arr1[1])

let copyArr = arr1.slice(1,6)
// console.log(copyArr);


 //program to print 10 numbers in reverse order
for(let num = 10; num >=1; num--){
    // console.log(num)
}

// or

for(let i = 0; i <10; i++){
    // console.log(10-i)
}

//Program to print positive numbers
let integers = [1, -6,5,7,-98];
for (let i= 0; i < integers.length; i++){
    if( integers[i] < 0) continue;
    else{
        console.log(integers[i])
    }
}

 


// Program to print 5 prime numbers
function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
             return false
        }
    }
     return true;
}

// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(17));

let num = 2;
let i = 0;
// while( i < 5){
//     if(isPrime(num)){
//         console.log(num);
//         i++;
//     }
//     num++;
// }

//using break statement
// while( true){
//     if(isPrime(num)){
//         console.log(num);
//         i++;
//         if( i >=5){
//             break;
//         }
//     }
//     num++;
// }


let str = ['apple', 'is', 'fruit'];
let newStr = '';
for(let i = 0; i< str.length; i++){
    newStr += str[i] + ' ';
}
// console.log(newStr)
console.log(str.join(' '))
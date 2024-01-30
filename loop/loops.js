// while loop
// let num = 1;
// while (num <=100){
//     // console.log(num);
//     num++;
// }

// console.log("Final value of num : " * num)

// do-while loop
// let x = 0;
// do{
//     console.log(x);
//     x++;
// }while(x <1)


// For Loop
// for(initialisation; conditon; update){
    // code
// }

for(let num = 1; num<=1; num++){
    // console.log(num)
}

let nums = [1,25,52,20,12,70,5]
let sums = 0;

// for(let num = 0; num< nums.length; num++){
//     console.log(nums[num])
// }


// sum of an array
for( let i = 0; i < nums.length; i++){
    sums += nums[i];
    // console.log(sums)
  }

//   console.log(sums)

// square of an array

let newArr = [];

for( let i = 0; i < nums.length; i++){
    // newArr[i] = nums[i] * nums[i];
    newArr.push(nums[i]*nums[i])
 }

console.log(newArr)
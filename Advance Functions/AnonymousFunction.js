let sum =function (num1, num2){
    return num1 + num2;
}

// console.log( typeof sum(4,6)); // function call

function man(){
 console.log("man")
}

// console.log(typeof man)


let sumThreeNums = function(num1, num2, num3, sumTwoNums){
    let sum1 = sumTwoNums(num1, num2);
    return sumTwoNums(sum1, num3);
}

// console.log(sumThreeNums(12,13,14, sum))
// console.log( typeof sum) // function
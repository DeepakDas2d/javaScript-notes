// function to ganarate OTP.
function generateOtp() {
    let OTP = "";
    let digits = "1234567890";

    for(let i = 0; i < 6; i++){
        OTP += digits[Math.floor(Math.random()*10)];
     }
    return OTP;
}

console.log(generateOtp());

// console.log((Math.random())*10)
// console.log(Math.floor(8.89))
 
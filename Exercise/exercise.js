let userName = "Deepak Das";

let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
if(currentHour >= 0 && currentHour < 12){
    console.log(`Good Morning ${userName}`)
}else if (currentHour >= 13 && currentHour <= 18){
    console.log(`Good Eveing ${userName}`)
}else{
    console.log(`Good Night ${userName}`)
}
 
// console.log(currentMinute)
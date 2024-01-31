let foods = ['bread', 'rice', 'meat', 'pizza'];

foods.forEach(function(food){
    // console.log(food + 1)
})

foods.forEach(food =>{
    if(food === 'rice'){
        // return;
        console.log("found")
    }
    console.log(`Visited: ${food}`)
})
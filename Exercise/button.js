 let noOfTimesClicked = localStorage.getItem('noOfTimesClicked') || 0;
 
 function buttonClicked(){
    noOfTimesClicked++;
    localStorage.setItem('noOfTimesClicked', noOfTimesClicked);
    updateButton();
 }

 function updateButton(){
    let button = document.querySelector('.btn');
    if(noOfTimesClicked % 2 === 0){
        // button.classList.remove('js-odd');
        button.classList.add('js-even');
    } else{
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    button.innerText = noOfTimesClicked;
 }

 updateButton();
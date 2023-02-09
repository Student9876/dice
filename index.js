// Random Number Generator between 1-6 
function randNum(){
    var num = Math.random() * 6;
    num = 1 + Math.floor(num);
    return num;
}

// Setting click values for Roll buttons 
var val1,val2;
function playerRoll1(){
    val1 = randNum();
}
function playerRoll2(){
    val2 = randNum();
}

// Detecting clicks 
// document.querySelector('#button1').addEventListener('click', playerRoll1());
// document.querySelector('#button2').addEventListener('click', playerRoll2());


// Comparing Values to give output 
function changeImage1(){
    playerRoll1();
    if(val1 === 1) {document.querySelector('#dice1').setAttribute('src','Images/dice_1.png')}
    else if(val1 === 2) {document.querySelector('#dice1').setAttribute('src','Images/dice_2.png');}
    else if(val1 === 3) {document.querySelector('#dice1').setAttribute('src','Images/dice_3.png');}
    else if(val1 === 4) {document.querySelector('#dice1').setAttribute('src','Images/dice_4.png');}
    else if(val1 === 5) {document.querySelector('#dice1').setAttribute('src','Images/dice_5.png');}
    else if(val1 === 6) {document.querySelector('#dice1').setAttribute('src','Images/dice_6.png');}
    document.querySelector('#button2').disabled = false;
}

function changeImage2(){

    playerRoll2();
    if(val2 === 1) {document.querySelector('#dice2').setAttribute('src','Images/dice_1.png')}
    else if(val2 === 2) {document.querySelector('#dice2').setAttribute('src','Images/dice_2.png');}
    else if(val2 === 3) {document.querySelector('#dice2').setAttribute('src','Images/dice_3.png');}
    else if(val2 === 4) {document.querySelector('#dice2').setAttribute('src','Images/dice_4.png');}
    else if(val2 === 5) {document.querySelector('#dice2').setAttribute('src','Images/dice_5.png');}
    else if(val2 === 6) {document.querySelector('#dice2').setAttribute('src','Images/dice_6.png');}
    showResult();
    document.querySelector('#hiddenBtn').hidden = false;
}



function showResult(){

    if(val1>val2){
        document.querySelector('#resultOfDice').setAttribute('src','Images/Player1.png');
    }else if(val1<val2){
        document.querySelector('#resultOfDice').setAttribute('src','Images/Player2.png');
    }else{
        document.querySelector('#resultOfDice').setAttribute('src','Images/draw.png');
    }
    
}


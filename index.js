// Random Number Generator between 1-6 
function randNum(){
    var num = Math.random() * 6;
    num = 1 + Math.floor(num);
    return num;
}

// Setting click values for Roll buttons 
var val1,val2,c=0;
function playerRoll1(){
    val1 = randNum();
}
function playerRoll2(){
    val2 = randNum();
}

// Detecting clicks 
// document.querySelector('#button1').addEventListener('click', playerRoll1());
// document.querySelector('#button2').addEventListener('click', playerRoll2());
document.querySelector('#modechange').addEventListener('click',darkMode);

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
        document.querySelector('#resultOfDice').setAttribute('alt','Player 1 win!!');
    }else if(val1<val2){
        document.querySelector('#resultOfDice').setAttribute('src','Images/Player2.png');
        document.querySelector('#resultOfDice').setAttribute('alt','Player 2 win!!');
    }else{
        document.querySelector('#resultOfDice').setAttribute('src','Images/draw.png');
    }
    
}


// DarkMode 
function changeVal(){
    if(c===0) {c=1;}
    else if(c===1){c=0;}
}

function darkMode(){
    if(c===0) {document.querySelector('#modeBtn').classList.replace('fa-sun','fa-moon');}
    else if(c===1) {document.querySelector('#modeBtn').classList.replace('fa-moon','fa-sun');}
    if(c===0){
        document.querySelector('#modeBtn').style.color = 'black';
        document.querySelector('.heading').style.backgroundColor='#EEE9DA';
        document.querySelector('#bigHeading').style.color='black';
        document.querySelector('#smallHeading1').style.color='black';
        document.querySelector('#smallHeading2').style.color='black';
        document.querySelector('.player_name').style.backgroundColor='#FFE7CC';
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('#button1').classList.replace('btn-dark','btn-primary');
        document.querySelector('#button2').classList.replace('btn-dark','btn-primary');
        document.querySelector('#hiddenBtn').classList.replace('btn-primary','btn-dark');
    }
    if(c===1){
        document.querySelector('#modeBtn').style.color = 'white';
        document.querySelector('.heading').style.backgroundColor='#03001C';
        document.querySelector('#bigHeading').style.color='White';
        document.querySelector('#smallHeading1').style.color='White';
        document.querySelector('#smallHeading2').style.color='White';
        document.querySelector('.player_name').style.backgroundColor='#191A19';
        document.querySelector('body').style.backgroundColor='#282A3A';
        document.querySelector('#button1').classList.replace('btn-primary','btn-dark');
        document.querySelector('#button2').classList.replace('btn-primary','btn-dark');
        document.querySelector('#hiddenBtn').classList.replace('btn-dark','btn-primary');
    }
}


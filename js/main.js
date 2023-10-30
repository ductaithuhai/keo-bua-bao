let clientScore=0;
let comScore=0;
let ketqua1;

function getComNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice(comNumber){
    if (comNumber==1){
          return 'scissor';
        }

    if (comNumber==2){
          return 'rock';
        }

    if (comNumber==3){
          return 'paper';
        }
}

function playRound(a,b){
  if((a=='scissor'&& b=='scissor')||
    (a=='rock'&& b=='rock')||
     (a=='paper'&& b=='paper'))  {
    return 'Hai bạn đã hòa nhau hiệp này';
}

if((a=='scissor'&& b=='rock')||
    (a=='rock'&& b=='paper')||
      (a=='paper'&& b=='scissor')) 
       {
        clientScore++;
        return 'Bạn đã thắng hiệp này! '+  b +' đã đánh bại ' + a;
        }

if((a=='scissor'&& b=='paper')||
    (a=='rock'&& b=='scissor')||
      (a=='paper'&& b=='rock')) 
        {
          comScore++;
          return 'Bạn đã thua hiệp này! '+  a +' đã đánh bại ' + b;
}
}

function ketqua(clScore,cScore){
  if(clScore==5&&cScore<5){
    comScore=0;
    clientScore=0;
    return 'Human Destroy Orc!! You Happy Ever After';
  }
  if(comScore==5&&clientScore<5){
    comScore=0;
    clientScore=0;
    return'Orc Destroy Human!! Let Begin The Age Of Extinction';
  }
  }

const yourScore = document.getElementsByClassName("yourScore");
const orcScore = document.getElementsByClassName("orcScore");
let endGameMess = document.getElementsByClassName("endGameMess");

let clientChoice;
let rock = document.getElementsByClassName("rock");
rock[0].addEventListener("click", function() {
  clientChoice='rock';
  let comNumber=getComNumber(1,3);
  let comChoice=getComputerChoice(comNumber);
  let message= playRound(comChoice,clientChoice);
  yourScore[0].innerHTML=clientScore;
  orcScore[0].innerHTML=comScore;
  ketqua1= ketqua(clientScore,comScore);
  endGameMess[0].innerHTML=ketqua1;
  console.log(clientChoice);
  console.log(comChoice);
  console.log(message);
  console.log('Điểm của bạn: ',clientScore);
  console.log('Điểm của máy: ',comScore);
});

let paper = document.getElementsByClassName("paper");
paper[0].addEventListener("click", function() {
  clientChoice='paper';
  let comNumber=getComNumber(1,3);
  let comChoice=getComputerChoice(comNumber);
  let message= playRound(comChoice,clientChoice);
  ketqua1= ketqua(clientScore,comScore);
  yourScore[0].innerHTML=clientScore;
  orcScore[0].innerHTML=comScore;
  endGameMess[0].innerHTML=ketqua1;
  console.log('Điểm của bạn: ',clientScore);
  console.log('Điểm của máy: ',comScore);
  console.log(clientChoice);
  console.log(comChoice);
  console.log(message);
});

let scis = document.getElementsByClassName("scis");
scis[0].addEventListener("click", function() {
  clientChoice='scissor';
  let comNumber=getComNumber(1,3);
  let comChoice=getComputerChoice(comNumber);
  let message= playRound(comChoice,clientChoice);
  ketqua1= ketqua(clientScore,comScore);
  yourScore[0].innerHTML=clientScore;
  orcScore[0].innerHTML=comScore;
  endGameMess[0].innerHTML=ketqua1;
  console.log('Điểm của bạn: ',clientScore);
  console.log('Điểm của máy: ',comScore);
  console.log(clientChoice);
  console.log(comChoice);
  console.log(message);
});


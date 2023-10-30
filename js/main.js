let clientScore=0;
let comScore=0;
let ketqua1;

function getComNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice(comNumber){
    if (comNumber==1){
          return 'Scissor';
        }

    if (comNumber==2){
          return 'Rock';
        }

    if (comNumber==3){
          return 'Paper';
        }
}

function playRound(a,b){
  if((a=='Scissor'&& b=='Scissor')||
    (a=='Rock'&& b=='Rock')||
     (a=='Paper'&& b=='Paper'))  {
    return 'It\'s a Tie';
}

if((a=='Scissor'&& b=='Rock')||
    (a=='Rock'&& b=='Paper')||
      (a=='Paper'&& b=='Scissor')) 
       {
        clientScore++;
        return 'You win this round!! '+  b +' beated ' + a;
        }

if((a=='Scissor'&& b=='Paper')||
    (a=='Rock'&& b=='Scissor')||
      (a=='Paper'&& b=='Rock')) 
        {
          comScore++;
          return 'You loose this round! '+  a +' beated ' + b;
}
}

let endGameBackground = document.getElementsByClassName("endGameBackground");

function ketqua(clScore,cScore){
  if(clScore==5&&cScore<5){
    comScore=0;
    clientScore=0;
    endGameBackground[0].style.display='block';
    return 'Human Destroy Orc!! Happy Ever After';
  }
  if(comScore==5&&clientScore<5){
    comScore=0;
    clientScore=0;
    endGameBackground[0].style.display='block';
    return'Orc Destroy Human!! Age Of Extinction';
  }
  }

const yourScore = document.getElementsByClassName("yourScore");
const orcScore = document.getElementsByClassName("orcScore");
let yourSym=document.getElementsByClassName("yourSym");
let orcSym=document.getElementsByClassName("orcSym");
let endGameMes=document.getElementsByClassName("endGameMes");
let roundMes=document.getElementsByClassName("roundMes");

let clientChoice;
let rock = document.getElementsByClassName("rock");
rock[0].addEventListener("click", function() {
  clientChoice='Rock';
  let comNumber=getComNumber(1,3);
  let comChoice=getComputerChoice(comNumber);
  let message= playRound(comChoice,clientChoice);
  yourScore[0].innerHTML=clientScore;
  orcScore[0].innerHTML=comScore;
  ketqua1= ketqua(clientScore,comScore);
  endGameMes[0].innerHTML=ketqua1;
  yourSym[0].src='../assets/img/rock.png';
  if(comChoice=='Rock'){
    orcSym[0].src='../assets/img/rock.png';
  } else if(comChoice=='Paper'){
    orcSym[0].src='../assets/img/paper.png';
  } else{
    orcSym[0].src='../assets/img/scis.png';
  }
  roundMes[0].innerHTML=message;
});

let paper = document.getElementsByClassName("paper");
paper[0].addEventListener("click", function() {
  clientChoice='Paper';
  let comNumber=getComNumber(1,3);
  let comChoice=getComputerChoice(comNumber);
  let message= playRound(comChoice,clientChoice);
  ketqua1= ketqua(clientScore,comScore);
  yourScore[0].innerHTML=clientScore;
  orcScore[0].innerHTML=comScore;
  endGameMes[0].innerHTML=ketqua1;
  yourSym[0].src='../assets/img/paper.png';
  if(comChoice=='Rock'){
    orcSym[0].src='../assets/img/rock.png';
  } else if(comChoice=='Paper'){
    orcSym[0].src='../assets/img/paper.png';
  } else{
    orcSym[0].src='../assets/img/scis.png';
  }
  roundMes[0].innerHTML=message;
});

let scis = document.getElementsByClassName("scis");
scis[0].addEventListener("click", function() {
  clientChoice='Scissor';
  let comNumber=getComNumber(1,3);
  let comChoice=getComputerChoice(comNumber);
  let message= playRound(comChoice,clientChoice);
  ketqua1= ketqua(clientScore,comScore);
  yourScore[0].innerHTML=clientScore;
  orcScore[0].innerHTML=comScore;
  endGameMes[0].innerHTML=ketqua1;
  yourSym[0].src='../assets/img/scis.png';
  if(comChoice=='Rock'){
    orcSym[0].src='../assets/img/rock.png';
  } else if(comChoice=='Paper'){
    orcSym[0].src='../assets/img/paper.png';
  } else{
    orcSym[0].src='../assets/img/scis.png';
  }
  roundMes[0].innerHTML=message;
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  endGameBackground[0].style.display = "none";
}
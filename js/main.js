let clientScore=0;
let comScore=0;

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
let clientChoice;
clientChoice= document.getElementsByClassName("rock").onclick = function() {youchooserock()};
function youchooserock(){
  return clientChoice='rock';
}

document.getElementsByClassName("paper").onclick = function() {youchoosepaper()};
function youchooserock(){
  return clientChoice='paper';
}

document.getElementsByClassName("scis").onclick = function() {youchoosescis()};
function youchooserock(){
  return clientChoice='scissor';
}
console.log(clientChoice);
      // let comNumber=getComNumber(1,3);
      // let comChoice=getComputerChoice(comNumber);
      // let message= playRound(comChoice,clientChoice);
      // console.log(clientChoice);
      // console.log(comChoice);
      // console.log(message);
    // game(5);
    // let ketqua;
    // if(clientScore>comScore){
    //   ketqua='Bạn đã chiến thắng chung cuộc!!!!!!!!';
    // } else if(clientScore==comScore){
    //   ketqua='Hai bạn đã hòa nhau.';
    // } else {
    //   ketqua='Bạn đã thất bại hoàn toàn :)))))))';
    // }
    //     console.log(ketqua);
    //     console.log('Điểm của bạn: ',clientScore);
    //     console.log('Điểm của máy: ',comScore);

let clientScore=0;
let comScore=0;

function getComNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice(comNumber){
    if (comNumber==1){
          return 'kéo';
        }

    if (comNumber==2){
          return 'búa';
        }

    if (comNumber==3){
          return 'bao';
        }
}

function playRound(a,b){
  if((a=='kéo'&& b=='kéo')||
    (a=='búa'&& b=='búa')||
     (a=='bao'&& b=='bao'))  {
    return 'Hai bạn đã hòa nhau hiệp này';
}

if((a=='kéo'&& b=='búa')||
    (a=='búa'&& b=='bao')||
      (a=='bao'&& b=='kéo')) 
       {
        clientScore++;
        return 'Bạn đã thắng hiệp này! '+  b +' đã đánh bại ' + a;
        }

if((a=='kéo'&& b=='bao')||
    (a=='búa'&& b=='kéo')||
      (a=='bao'&& b=='búa')) 
        {
          comScore++;
          return 'Bạn đã thua hiệp này! '+  a +' đã đánh bại ' + b;
}
}

function game(soluot){
    for(let i=1;i<=soluot;i++){
      let comNumber=getComNumber(1,3);
      let clientChoice=prompt("Vui lòng đưa ra lựa chọn của bạn: ").toLowerCase();
      let comChoice=getComputerChoice(comNumber);
      let message= playRound(comChoice,clientChoice);
      console.log(clientChoice);
      console.log(comChoice);
      console.log(message);
    }
    }
    game(5);
    let ketqua;
    if(clientScore>comScore){
      ketqua='Bạn đã chiến thắng chung cuộc!!!!!!!!';
    } else if(clientScore==comScore){
      ketqua='Hai bạn đã hòa nhau.';
    } else {
      ketqua='Bạn đã thất bại hoàn toàn :)))))))';
    }
        console.log(ketqua);
        console.log('Điểm của bạn: ',clientScore);
        console.log('Điểm của máy: ',comScore);

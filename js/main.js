let clientScore=0;
let comScore=0;

let clientChoice=prompt("Vui long dua ra lua chon cua ban: ");

function getComputerChoice(){
  let comChoice;
    if (comNumber==1){
          comChoice='keo';
        }

    if (comNumber==2){
          comChoice='bua';
        }

    if (comNumber==3){
          comChoice='bao';
        }
}

console.log(clientChoice);
console.log(comChoice);

function playRound(a,b){
  if((a=='keo'&& b=='keo')||
    (a=='bua'&& b=='bua')||
     (a=='bao'&& b=='bao'))  {
    return 'Hai ban da hoa nhau';
}

if((a=='keo'&& b=='bua')||
    (a=='bua'&& b=='bao')||
      (a=='bao'&& b=='keo')) 
       {
        clientScore++;
        return 'Ban da thang hiep nay! '+  b +' da danh bai ' + a;
        }

if((a=='keo'&& b=='bao')||
    (a=='bua'&& b=='keo')||
      (a=='bao'&& b=='bua')) 
        {
          comScore++;
          return 'Ban da thua hiep nay! '+  a +' da danh bai ' + b;
}
}

function game(){
  while((clientScore<5)||(comScore<5)){
    let message=playRound(clientChoice,comChoice);
    if(clientScore==5){
      console.log('Chuc mung ban da chien thang');
      break;
    }
    
    if(comScore==5){
      console.log('Xin loi ban da thua');
      break;
    }
    
}
}
        
        console.log('Diem cua ban: ',clientScore);
        console.log('Diem cua may: ',comScore);

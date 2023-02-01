function formbutton(x){
    
    document.getElementById("wrap").style.display='none';
    document.getElementById("formF").style.display='block';
    x.disabled=true;
}

function submit(){
    document.getElementById('n1').innerHTML=document.getElementById('name').value;
    document.getElementById('e1').innerHTML=document.getElementById('email').value;
    document.getElementById('u1').innerHTML=document.getElementById('username').value;
    
    document.getElementById("formF").style.display='none';    
    document.getElementById("wrap").style.display='';    
}
function register(x){
    document.getElementById('wrap').style.display='none';
    document.getElementById("reg").style.display='block';
    x.disabled=true;
}
function previous(x){
    document.getElementById("wrap").style.display='';
    document.getElementById("reg").style.display='none';
   x.disabled=true;
}

function diceGame(x){
    document.getElementById('wrap').style.display='none';
document.getElementById('dic').style.display='block';
    x.diceGame=true;
}
function generateRandom(x){
    let i=0,sum=0;
    while(i<3){
  let generate=Math.floor(Math.random()*6)+1;
   let k=document.getElementById('f').innerHTML=generate;
   document.getElementById('dic').style.display='block';
   sum+=k;
   i++;
   if(sum>10){
       return;    
   }
   else{
       alert('try Again.....');
   }
}

x.disabled=true;
}
function dice(){
    let coup=Math.floor(Math.random()*324283993924)+1;
    let coupon=document.getElementById('coupon').innerHTML=coup;
    document.getElementById('wrap').style.display='none';
    document.getElementById('coupon').style.display='block';

}





function sub(){
  if (document.querySelector(".button1").innerHTML==="Subscribe"){
    document.querySelector(".button1").innerHTML="Subscribed" ; 
  }
 else{
    document.querySelector(".button1").innerHTML="Subscribe" ; 
  }
}
function claculateTotale(){

  let input=document.querySelector(".input1");
  let cost=Number(input.value)  ;
  if (cost<=40){
  cost = 10+cost   ;
  }
  else if (cost>40){
  cost = cost;
  }
  document.querySelector(".costTotal").innerHTML = "$"+cost ; 
}
//    <p >Orders under $40 = +$10 shipping.</p>
 //   <p >Orders over $40 = FREE shipping.</p>
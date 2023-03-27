'use strict'
let intervalId1;
let intervalId2;
let i=1;
let j=1;
 function animate1(){
      let pic="images/"+i+".png";
      lion.src=pic;
      lion.width="400";
      i++;
      if(i==14) i=1;
 }
 function animate2(){
    let pic="images/m"+j+".png";
    mikky.src=pic;
    mikky.width="200";
    j++;
    if(j==10) j=1;
}
 function call()
 {  if(btn.value=="start"){
    intervalId1=setInterval(animate1,50);
    intervalId2=setInterval(animate2,30);
    btn.value="pause";
    marq.start();
    }else{
        clearInterval(intervalId1)
        clearInterval(intervalId2)
    btn.value="start"
    marq.stop();
    }
 }
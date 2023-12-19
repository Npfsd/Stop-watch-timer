const startbtn=document.querySelector(".start");
const stopbtn=document.querySelector(".stop");
const resetbtn=document.querySelector(".reset");

let hrs=min=sec=ms=0,startTimer;

startbtn.addEventListener("click",()=>{
    startbtn.classList.add("startpoint");
    stopbtn.classList.remove("stoppoint")

   startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
      sec++;
      ms=0;
    }
    if(sec==60){
        min++;
        sec=0
    }
    if(min==60){
        hrs++
        min=0
    }
   
    stopwatch();
  },10);
})
   

stopbtn.addEventListener("click",()=>{
   
    clearInterval(startTimer)
    startbtn.classList.remove("startpoint");
    stopbtn.classList.add("stoppoint")
});
resetbtn.addEventListener("click",()=>{
  
    hrs=min=sec=ms=0;
    clearInterval(startTimer)
    stopwatch();
    startbtn.classList.remove("startpoint");
    stopbtn.classList.remove("stoppoint")
    
    
   
});

function stopwatch(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;

document.querySelector(".hrs").innerHTML=phrs;
document.querySelector(".min").innerHTML=pmin;
document.querySelector(".sec").innerHTML=psec;
document.querySelector(".ms").innerHTML=pms;
}
let hour = document.querySelector(".hh");
let min = document.querySelector(".mm");
let sec = document.querySelector(".ss");
let pausres = document.getElementById("pause");
let starres = document.getElementById("start");
let laprec = document.getElementById("rec");
var pause =true , start = true;
let ss = 0,mm=0,hh=0,lcount=0;
var intv;
let startFunc = () =>{
     if(start){
            start=false;
            starres.style.backgroundColor="#28ccbc";
            starres.innerHTML="Reset";
            intv = setInterval(()=>{
            ss++;
            if(ss==60){
                mm++;
               ss=0; 
            }
            if(mm==60){
            hh++;
            mm=0;
            ss=0;
            }
            sec.innerHTML=ss<10?"0"+ss:ss;
            min.innerHTML=mm<10?"0"+mm:mm;
            hour.innerHTML=hh<10?"0"+hh:hh;
            },1000);
    }
    else{
        clearInterval(intv);
        ss = 0,mm=0,hh=0;
        sec.innerHTML="00";
        min.innerHTML="00";
        hour.innerHTML="00";
        start=true;
        starres.style.backgroundColor="#3bcc28";
        starres.innerHTML="Start";
        pause=true;
        pausres.style.backgroundColor="red";
        pausres.innerHTML="Pause";
        lcount=0;
        laprec.innerHTML="";
    }

}
let pauseFunc = () =>{
    if(pause){
        clearInterval(intv);
        pausres.style.backgroundColor="#3bcc28";
        pausres.innerHTML="Resume";
        pause=!pause;
    }
    else{
        start=true;
        startFunc();
        pausres.style.backgroundColor="red";
        pausres.innerHTML="Pause";
        pause=!pause;
    }
    
}
let lapFunc=()=>{
    let lapss=ss<10?"0"+ss:ss;
    let lapmm=mm<10?"0"+mm:mm;
    let laphh=hh<10?"0"+hh:hh;
    lcount++;
    laprec.innerHTML+=`<div>${lcount} lap -> ${laphh} : ${lapmm} : ${lapss}</div>`;
    laprec.style.margin="10%";
    laprec.style.textAlign="center";
}
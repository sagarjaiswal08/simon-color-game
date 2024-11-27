let gameSeq=[];
let userSeq=[];

let started =false;
let h3=document.querySelector("h3");

const opt =["yellow","red","blue","green"];


let level=0;
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started = true;
    levelUp();
   }
});

  function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let ranInd=Math.floor(Math.random()*3);
    let randomColor = opt[ranInd];
    let ranBtn=document.querySelector(`.${randomColor}`);
    


    gameSeq.push(randomColor);
    console.log(gameSeq);

   btnFlash(ranBtn);
  }


  function btnFlash(btn){
    btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250)
  }


  function userBtnFlash(btn){
    btn.classList.add("userBtnFlash");
   setTimeout(function(){
    btn.classList.remove("userBtnFlash");
   },100)
  }


  function btnPress(){
    let btn = this;

    userBtnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAnswer(userSeq.length-1);

  }


  let allBt = document.querySelectorAll(".btn");
  for(btn of allBt){
    btn.addEventListener("click",btnPress);
  }

  function checkAnswer(idx){

    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length == userSeq.length){
           setTimeout(levelUp,1000);

        }
        else{

        }
    }
    else{
        h3.innerHTML = `Game over!! your score was <b>${level}</b><br> Press any Key to start`;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
  }


  function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;


  }
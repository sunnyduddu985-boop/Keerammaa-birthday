let slides=document.querySelectorAll(".slide");
let index=0;

function nextSlide(){
  slides[index].classList.remove("active");
  index++;
  slides[index].classList.add("active");
  if(index===3) typeMessage();
}

function unlock(){
  let pass=document.getElementById("password").value;
  if(pass==="cutie pie keeru"){
    document.getElementById("lockScreen").style.display="none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("bgMusic").play();
  }else{
    alert("Wrong magic word 😘");
  }
}

function fireworks(){
  alert("🎆 Boom! Love Explosion 🎆");
  nextSlide();
}

const msg=
"Happy Birthday My Keerammaaaa 🎂💖\n\n"+
"You are my happiness, my calm, my forever.\n"+
"Every heartbeat whispers your name 💕\n\n"+
"I promise endless love, care & forever moments 💍";

let i=0;
function typeMessage(){
  let t=document.getElementById("typeText");
  let typing=setInterval(()=>{
    t.innerHTML+=msg.charAt(i);
    i++;
    if(i>=msg.length) clearInterval(typing);
  },70);
}

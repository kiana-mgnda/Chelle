const gate = document.getElementById("gate");
const site = document.getElementById("site");
const password = document.getElementById("password");
const btn = document.getElementById("continueBtn");
const hint = document.getElementById("hint");

function openSite(){
  if(password.value.trim() === "Rheychelle"){
    gate.style.opacity = "0";
    gate.style.transition = "opacity .8s ease";
    setTimeout(()=>{
      gate.classList.add("hidden");
      site.classList.remove("hidden");
      window.scrollTo(0,0);
    },800);
  }else{
    hint.textContent = "Hint: it's a special name. ♡";
    password.animate([
      {transform:"translateX(0)"},
      {transform:"translateX(-6px)"},
      {transform:"translateX(6px)"},
      {transform:"translateX(0)"}
    ],{duration:280});
  }
}
btn.addEventListener("click",openSite);
password.addEventListener("keydown",e=>{if(e.key==="Enter")openSite();});

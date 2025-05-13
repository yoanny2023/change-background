const body  = document.body;
const all_btn = document.querySelectorAll(".botao");
const cor_atual = document.getElementById("cor-atual"); 
const colors = ["#f04d23","#2266b3","#f4b942","#b8b09c","#57e245","#171717"];

all_btn.forEach((el,i)=>{
el.addEventListener("click",()=>{
  body.style.backgroundColor = `${colors[i]}`;
  if(i === colors.length -1){
  cor_atual.textContent = "Cor padrão";
  return;
  }
  cor_atual.textContent = colors[i];
  
})
});

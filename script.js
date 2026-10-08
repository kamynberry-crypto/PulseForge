document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});

document.querySelectorAll(".btn.primary").forEach(button=>{
  button.addEventListener("click",()=>{
    button.style.transform="scale(.98)";
    setTimeout(()=>button.style.transform="",120);
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
},{threshold:.08});

document.querySelectorAll(".features article,.game,.steps>div,.stack>div,.factgrid div").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(18px)";
  el.style.transition="opacity .6s ease,transform .6s ease";
  observer.observe(el);
});

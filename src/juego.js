bujero = document.getElementById("agujero");
tubo = document.getElementById("tubo");
pj = document.getElementById("pj")
contador = document.getElementById("contador")
record = document.getElementById("record")
pantalla = document.getElementById("juego");
var timejump = 0;
posicionagujero = 0
var jumping = 0;
puntuacion = 0;
nuevorecord = 0;
recordd = 0;
//hacer q sea invisible el tbo

agujero.addEventListener("animationiteration" ,()=>{
  if(puntuacion == -1){
    bujero.style.display = "none"
    bujero.style.display = "none"
  }
  bujero.style.display = "flex"
  bujero.style.display = "flex"
  posicionagujero = -((Math.random()*400)+125)
  console.log(posicionagujero)
  bujero.style.top = posicionagujero +"px";
  puntuacion++
  nuevorecord++;

  htmlcode = `${puntuacion}`
  contador.innerHTML = htmlcode;

 
})

setInterval(()=>{
  posicionmax = 500;
  posicionmaxbujero =+500+(posicionagujero);
  posicionminbujero = 600+posicionagujero; 
  leftpj = parseInt(window.getComputedStyle(pj).getPropertyValue("left"));
  lefttubo =parseInt(window.getComputedStyle(tubo).getPropertyValue("left"));
  posicionpj = parseInt(window.getComputedStyle(pj).getPropertyValue("top"))
  if(jumping == 0){
   pj.style.top =(posicionpj+1.7)+"px";
  }
  if(lefttubo<=leftpj+25){
    if( (posicionpj<=posicionmaxbujero+12.5)|| (posicionpj>=posicionminbujero) ){
      
      alert("tu puntuacin es de "+puntuacion)
      pj.style.top = 100+"px";
      window.location.href = `/game/${puntuacion}`
      puntuacion = -1;
      recordd = record.innerHTML 
      if(nuevorecord>recordd){
      
      record.innerHTML = nuevorecord;
      
      }
      nuevorecord = -1; 
      
    }
   
         
  }
  if(posicionpj <=-12.5){
   
    alert("tu puntuacin es de "+puntuacion)
      pj.style.top = 100+"px";
      window.location.href = `/game/${puntuacion}`
      puntuacion = -1;
      recordd = record.innerHTML 
      if(nuevorecord>recordd){
      
      record.innerHTML = nuevorecord;
     
      }
      nuevorecord = -1;
      
  }
  if(posicionpj >=477){
    
    alert("tu puntuacin es de "+puntuacion)
      pj.style.top = 100+"px";
      window.location.href = `/game/${puntuacion}`
      puntuacion = -1;
      recordd = record.innerHTML 
      if(nuevorecord>recordd){
      
      record.innerHTML = nuevorecord;
      
      }
      nuevorecord = -1;
  }
 
 },2.5) 


pantalla.addEventListener("click",()=>{
    i = 0;
    jumping = 1;
    jump = setInterval(() => {
      
      posicionpj = parseInt(window.getComputedStyle(pj).getPropertyValue("top"))
      if( (i <15 && i !=0)){
      pj.style.top =(posicionpj-4)+"px";
      }
       while (i >20){
        clearInterval(jump)
        i=0
        jumping =0 ;          
        
       }
       i ++;
      
      
    },3);
    
   
     
})
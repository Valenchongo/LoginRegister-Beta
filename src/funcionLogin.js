const user = document.querySelector("#user");
const password = document.querySelector("#password");
const boton = document.querySelector(".send");

boton.addEventListener("click",()=>{
    
    window.location.href = `logueado/${user.value}/${password.value}`;
  

})
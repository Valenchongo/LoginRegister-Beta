const user = document.querySelector("#user");
const password = document.querySelector("#password");
const boton = document.querySelector(".Register");

boton.addEventListener("click",()=>{
    window.location.href = `/registrado/${user.value}/${password.value}`;
    
})
const login = document.querySelector(".login");
const register = document.querySelector(".register");


/*le decimos que cuando apretemos el boton login nos mande
a la url /login en la cual mostraremos el html de la parte del
login*/
login.addEventListener("click",()=>{   
    window.location.href = "/Login"  
})

//lo mismo que antes pero con el register
register.addEventListener("click",()=>{   
    window.location.href = "/Register"  
})

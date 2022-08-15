import express from "express";
const app = express();
var result;
let id
let recordd;
let yaregis;

//importamos los metodos de nuestros otros scripts
import{Registrar,Loguear,sacarID,record1, sacarrecord} from "./src/mysql_conector.js"

//iniciamos el server
app.listen("8000", ()=>{
});


//configuramos las vistas

app.set("views","./vistas");
app.set("view engine", "pug");

//archivos estaticos

app.use(express.static("C:\Users\Valentin Valle\Desktop\login\vistas"));
app.use(express.static("./css"));
app.use(express.static("./src"));


//configuramos lo que se va a mostrar en cada ruta

app.get("/" , (req, res)=>{
    res.render("principal");
})

app.get("/Login", (req, res)=>{
    res.render("login")
})

app.get("/Register",(req, res) =>{
    res.render("register")
})

app.get("/registrado/:user/:password", (req, res)=>{
  yaregis = 1;
  let user = req.params.user;
  let password = req.params.password;
  yaregis = Registrar(user, password);
  console.log(yaregis)
  if(yaregis){
    res.redirect("/denegado")
  }else{
    user = undefined;
    password = undefined;

  res.redirect("/");}
})


app.get("/logueado/:user/:password",  (req, res) =>{
    let user = req.params.user;
    let password = req.params.password;
    result =  Loguear(user,password)
    if(result){
        let id = sacarID(user);
        res.redirect(`/game`);
    }else{
        res.redirect("/Login")
    }
    
    id = sacarID(user)
   
   
    
})

app.get("/game/", (req,res)=>{
    recordd = sacarrecord(id);
    res.render("game",{recordd : recordd})
})


app.get("/game/:puntaje",(req,res)=>{
    console.log(id + "soy id")
    let puntaje = req.params.puntaje;
    recordd = record1(puntaje,id);
    if(puntaje > 0){
        recordd = record1(puntaje,id);
    res.redirect("/game")
    }
    

})

app.get("/denegado",(req,res)=>{
    res.render("denegado")
})
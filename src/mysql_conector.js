
let pass
let id;
let truee;
let logeado ; 
let recordd;
let yaregistrado ;
//importamos mysql

import mysql from "mysql";

//conexion a nuestra base de datos

const conector = mysql.createConnection({
    // host:"localhost",
    user:"valentin",
    password:"123456",
    database:"log"
})

//agregar las cuentas a mysql

const Registrar = (user, password) =>{
   const sql1 = `SELECT  id FROM REGISTRADOS WHERE user = "${user}" `
  conector.query(sql1,(err,resultado,filed)=>{
      if(resultado.length > 0){
        console.log("ya registrado")
        yaregistrado = true;
        console.log(yaregistrado)
      }else{
        console.log("no tegistrado")
        yaregistrado = false;
        console.log(yaregistrado)
        const sql = `INSERT INTO REGISTRADOS (id, user , password, record) values (${null}, "${user}", "${password}" , 0)`
        conector.query(sql,(err, resultado, filed)=>{
            if(err) throw err;
        })
      }
   })
   return yaregistrado

}

/*const Registrar = (user, password) =>{
    const sql = `INSERT INTO REGISTRADOS (id, user , password, record) values (${null}, "${user}", "${password}" , 0)`
    conector.query(sql,(err, resultado, filed)=>{
        if(err) throw err;
    })

}*/

const Loguear =   (user, password) =>{
    const sql = `SELECT  * FROM REGISTRADOS WHERE user = "${user}" `
       conector.query (sql, (err,resultado,filed)=>{
       if (resultado.length > 0){
        console.log("corriendo")
           user = resultado[0];
        if(user.password == password){
            
            logeado = true;
        }else{
           
            
            logeado = false;
        }
       }else{
          console.log("soy undefinde")
          logeado = undefined;
       }
       
    })
   
    return(logeado) 
    
    
}

const sacarID = (user)=>{
    const sql = `SELECT  id FROM REGISTRADOS WHERE user = "${user}" `
    conector.query(sql,(err,resultado,filed)=>{
        if(resultado.length  >  0){
             id = resultado[0].id ;
        }
    })
   
return id;
}

const record1 = (puntaje,id)=>{
    
    const sql = `SELECT  * FROM REGISTRADOS WHERE id = "${id}" `
    conector.query(sql,(err,resultado,filed)=>{
       recordd = resultado[0].record;
       console.log(recordd)
       if(puntaje > recordd){
        const sql1 = `UPDATE registrados SET record = ${puntaje} where id=${id}`
        conector.query(sql1,(err,resultado,filed)=>{
            console.log(resultado);           
        });
        conector.query(sql,(err,resultado,filed)=>{
            recordd = resultado[0];            
        });
       }
    })
    return(recordd);
}
const sacarrecord = (id)=>{
    const sql = `SELECT  record FROM REGISTRADOS WHERE id = "${id}" `
    conector.query(sql,(err,resultado,filed)=>{
        recordd = resultado[0].record;});
        return recordd;
}

export{Registrar, Loguear, sacarID, record1, sacarrecord,conector}
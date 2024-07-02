const express = require("express");  //importanto express 
const mongoose = require("mongoose"); //importando mongoose: ODM -> Object Data Model.  
const sessions = require("express-session");   
const flash = require("connect-flash"); 
const path = require("path");  
const MongoStore = require("connect-mongo"); 
const router = require("./router");  
 
const { middlwareGlobal} = require("./src/middlewares/middlwareGlobal"); 
require('dotenv').config();  
const app  = express(); //inicializando express.  
app.use(express.static("public"));  
app.set("view engine", "ejs"); 
app.set("views",path.resolve(__dirname,"src", "views")); 



app.use(express.urlencoded({extended:true})) //configurando body parse.  
 
//iniciando conexão com a  base de dados. 
mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log("Conectando..."); 
    app.emit("Conected"); 
})  

app.on("Conected",()=>{ //quando for conectado com a base de dados, o express vai ficar escutando na porta 3000 
    //essa porta está configurada no arquivo de variáveis de ambiente. 
   app.listen(process.env.PORT,()=>{
    console.log("Conectado : http://localhost:3000/"); 
   })  
}) 

const sessionOptions = sessions({
    secret : "Aplication Sessions", 
    resave: false,  
    store: MongoStore.create({mongoUrl:process.env.CONNECTION_URL}), 
    saveUninitialized: false, 
    cookie: {
        httpOnly:true, 
        maxAge: 1000* 60*7*1000, 
    }
})  
app.use(sessionOptions); 
app.use(flash()); 
app.use(middlwareGlobal);  
app.use(router); 
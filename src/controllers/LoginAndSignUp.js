const SignUpAndLogin = require ("../models/SignUpAndLoginModel"); 
exports.indexLogin = (req,res) =>{
    res.render("Login"); 
} 

exports.indexRegister = (req,res) =>{
    res.render("Register")
} 

exports.createAccount= async  (req,res) =>{ 
   
  const signUpAndLogin = new SignUpAndLogin(req.body);  
  await signUpAndLogin.create(); 
  req.flash("success","Conta criada com Sucesso !");   
  res.redirect("/")
} 
exports.Auth = async (req,res) =>{  
  const signUpAndLogin = new SignUpAndLogin(req.body);  
  await signUpAndLogin.auth();   
  if( signUpAndLogin.erros.length > 0) {
    req.flash("erros",signUpAndLogin.erros);  
    res.redirect("back");   

  }else { 
    req.session.user = signUpAndLogin.user; 
    res.redirect("/home");    

  }
  
}
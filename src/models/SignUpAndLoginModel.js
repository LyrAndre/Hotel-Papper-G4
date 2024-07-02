const mongoose = require("mongoose"); 
const LoginAndSignUpSchema  = mongoose.Schema({
    username: {type:String, required:true}, 
    email:{type:String, required:true}, 
    password: {type:String, required:true} 
})  

const LoginAndSignUpModel = mongoose.model("Account",LoginAndSignUpSchema); 

class SignUpAndLogin {
    constructor(body) { 
      this.body = body; 
      this.erros = []; 
      this.user = null; 
    }  
    async create() {
      try {
        this.user = await LoginAndSignUpModel.create(this.body);
      } catch(e) {
        throw new Error(e);  
      }  
    } 
    async  auth() {
      try{  
        this.user = await LoginAndSignUpModel.findOne({email: this.body.email}) 
        if(!this.user) {
          this.erros.push("Usuário não existe!");
          return; 
        } 
        if(this.user.password !== this.body.password) {
          this.erros.push("Senha incorreta !");   
          return; 
        }
      }catch(e) {
        throw new Error(e); 
      }
    }
} 

module.exports = SignUpAndLogin; 
exports.indexHome = (req,res) =>{
    res.render("Home"); 
    console.log(req.session.user) 
} 

exports.logout = (req,res)=>{
    req.session.destroy(); 
    res.redirect("/"); 
}
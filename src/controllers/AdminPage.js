const Reservation = require("../models/ReservationModel")

exports.indexAdmin =  async(req,res) =>{ 
    const reservation = new Reservation(req.body);  
   const allReservations =  await  reservation.getAllReservations();
  res.render("AdminPage",{ allReservations});     
} 

exports.deleteReservation =  async (req,res) => {
    const reservation = new Reservation(req.body);   
     await reservation.delete(req.params.id);   
    res.redirect('back'); 
} 
exports.editReservation = async (req,res)=>{
    const reservation = new Reservation(req.body);    
    await reservation.edit(req.params.id); 
    res.redirect("back"); 
}
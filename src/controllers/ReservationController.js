
const Reservation = require("../models/ReservationModel")
exports.reservationIndex = (req,res) =>{
    res.render("Reservation")
} 

exports.createReservation = (req,res) =>{
    const reservation = new Reservation(req.body); 
    reservation.create();   
    req.flash("success","Reserva criada com sucesso!"); 
    res.redirect("back"); 

}
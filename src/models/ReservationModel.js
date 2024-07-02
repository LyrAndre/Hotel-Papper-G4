const mongoose = require('mongoose'); 
const { all } = require('../../router');

const ReservationSchema = mongoose.Schema({
    name :{type:String, required:true}, 
    email:{type:String, required:true}, 
    checkinDate  : {type:String , required:true}, 
    checkoutDate :{type:String , required:true}, 
    quarto : {type:String , required:true}, 
    checkInTime : {type:String , required:true}, 
    checkOutTime : {type:String , required:true}
}) 

const ReservationModel = mongoose.model("Reservas",ReservationSchema); 
class Reservation {
    constructor(body) {
        this.body= body; 
        this.erros= [];
        this.reservation = null; 
    } 
    async  create() {
       try {
         this.reservation = await ReservationModel.create(this.body)
       } catch (error) {
         throw new Error(error); 
       }       
    } 
    async getAllReservations() { 
      try  {
        const allReservation =  await ReservationModel.find();  
        return allReservation; 
      }catch(e) {
        throw new Error(e); 
      }
    } 
    async delete(id) { 
      try {
         this.reservation=  await ReservationModel.findByIdAndDelete({_id:id});  
      }catch(e) {
        throw new Error(e); 
      }
     } 
     async edit(id) {
      try {
        this.reservation = await ReservationModel.findByIdAndUpdate(id,this.body); 
      } catch (error) {
         throw new Error(error); 
      }
     }
} 
module.exports  = Reservation; 
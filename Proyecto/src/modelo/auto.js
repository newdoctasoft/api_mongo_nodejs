const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const autoSchema=new Schema({
  marca:String,
  modelo:String,
  anio:Number,
  cliente:{
      type:Schema.Types.ObjectId,
      ref:"cliente"
  }
});


module.exports=mongoose.model('Auto',autoSchema);
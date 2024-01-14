import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
    enum: ["patient"],
    default: "patient",
  },
  gender: { type: String, enum: ["male", "female", "other"] },
  bloodType: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
},{
  timestamps:true
});

UserSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next()
  }
  const salt=await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)

})
UserSchema.methods.matchPassword = async function(enteredpassword){
  return await bcrypt.compare(enteredpassword,this.password)
}


 const User = mongoose.model("User", UserSchema);
 export default User
import mongoose from "mongoose";

const Schema = mongoose.Schema;


const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  address: String,
  phone: String,
  gender: String,
  birthday: String,
  history: []
});

const User = mongoose.model('Users', userSchema);

export default User;
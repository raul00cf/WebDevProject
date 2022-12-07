import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propductSchema = new Schema({
  name: String,
  type: String,
  image: String,
  price: Number,
  rating: Number,
  stock: Number,
  audio: String,
  colors: [String]
}, {
  timestamps: true,
})

const Product = mongoose.model('Product', propductSchema);

export default Product;

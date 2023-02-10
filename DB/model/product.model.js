// title,desc,price,image:secure_url,userId



import { Schema ,model,Types } from "mongoose";

const productSchema= new Schema({
    placeName:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    images:[String],
    imagesPublicIds:[String],
},
{
    timestamps:true
})

 const productModel =model('product',productSchema)
 export default productModel
import productModel from "../../../../DB/model/product.model.js"
import cloudinary from "../../../services/cloudinary.js"

export const addData=async(req,res)=>{
    const {placeName,desc,price}=req.body

    if (!req.files?.length) {
        next(new Error('Image is required',{cause:400}))
    } else {
        const images=[]
        const imagesPublicIds=[]
        for(const file of req.files){
            const {secure_url , public_id} = await cloudinary.uploader.upload(file.path,{folder:`online projectAndorid/products${placeName}`})
            images.push(secure_url)
            imagesPublicIds.push(public_id)
        }
        req.body.images=images
        req.body.imagesPublicIds=imagesPublicIds
       
        const product= await productModel.create({placeName,desc,price,images:images,imagesPublicIds:imagesPublicIds})
        
        product?  res.status(201).json({message:"done",product}) :  next(new Error('Fail to add new product',{cause:400}))
    
    }
   
}


export const showData=async(req,res)=>{
    const {placeName}=req.params
    const place= await productModel.find({placeName:placeName})

  place.length?  res.json({message:"done",place}) : res.json({message:"not found information"})

}
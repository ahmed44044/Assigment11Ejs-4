import mongoose from "mongoose";
export const connectDB = async()=>{
    return await mongoose.connect(process.env.DBURI).then(res=>{
        console.log(`connected DB successfully on port ${process.env.DBURI}`);
    }).catch(err=>{
        console.log(`fail to  connected DB  ${err}`);

    })
}
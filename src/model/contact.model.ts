import mongoose from "mongoose";

interface IContact{
    name: string,
    phoneNo: number,
    email: string,
    projectName: string,
    message: string,
    createdAt: Date
}

const contactSchema = new mongoose.Schema<IContact>({
    name:{
        type:String,
        required:[true,"Name is required!"]
    },
    phoneNo:{
        type:Number,
        required:[true,"Phone number is required!"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email is required!"],
        unique:true
    },
    projectName:{
        type:String,
        enum:['gymify','cafefy','clothify','salonify'],
        trim:true,
        requird:true
    },
    message:{
        type:String,
        default:""
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

const Contact = mongoose.models?.Contact || mongoose.model<IContact>("Contact",contactSchema)

export default Contact;
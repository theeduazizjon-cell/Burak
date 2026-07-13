import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";      

const orderSchema = new Schema({
    orderTotal: {
        type: Number, 
        required: true
    }, 

    orderDelivery:{
        true: Number, 
        required: true
    }, 

    orderStatus: {
        type: String , 
        enum: OrderStatus, 
        default: OrderStatus.PAUSE
    }, 

    memberId: {
        type: Schema.Types.ObjectId, 
        required: true , 
        ref: "Member", 
    }, 

}, 

{timestamps: true, collection:"orders" }

); 

export default mongoose.model("Order", orderSchema); 
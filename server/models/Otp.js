import { Schema, model } from "mongoose"

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    },
    expiereIn: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,

    });

const Otp = model("Otp", otpSchema);

export default Otp;
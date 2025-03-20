import { Schema, model } from "mongoose"

const purchaseSchema = new Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        enum: ["UPI", "cash"]
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
    },
    reason: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    {
        timestamps: true,

    });

const Purchase = model("Purchase", purchaseSchema);

export default Purchase;
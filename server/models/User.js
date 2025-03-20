import { Schema, model } from "mongoose"
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,

    });

    userSchema.pre("save", async function (next) {
        const user = this

        if(user.isModified("password")){
            user.password = await bcrypt.hash(user.password, 8)
        }

        next();
    })

    userSchema.methods.comparePassword = async function (candidatePassword) {
        return await bcrypt.compare(candidatePassword, this.password);
    };


const User = model("User", userSchema);

export default User;
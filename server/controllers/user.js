import User from "../models/User.js";
import Otp from "../models/Otp.js";
import { queueEmail } from "./emailQueue.js";
import bcrypt from "bcryptjs";

const postSignup = async (req, res) => {
    const { fullName, email, password, number } = req.body;

    const user = new User({
        fullName,
        email,
        password,
        number
    });

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            message: `Signup Successfully`,
            data: savedUser
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: "Sorry,This Email is already exists",
            data: null
        })
    }

}

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email });

        if (user && await user.comparePassword(password)) {
            return res.json({
                success: true,
                message: "Login Successfully",
                data: user
            });
        } else {
            return res.json({
                success: false,
                message: "Invalid credentials",
                data: null
            });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.json({
            success: false,
            message: "Server error",
            data: null
        });
    }
};

const postEmailSend = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            let otpcode = Math.floor(1000 + Math.random() * 9000);

           
            let otpData = await Otp.findOne({ email });

            if (otpData) {
                otpData.code = otpcode;
                otpData.expiereIn = new Date().getTime() + 5 * 60 * 1000;  
                await otpData.save();
            } else {
              
                otpData = new Otp({
                    email: email,
                    code: otpcode,
                    expiereIn: new Date().getTime() + 5 * 60 * 1000
                });
                await otpData.save();
            }

          
            queueEmail(email, otpcode);

            return res.json({
                success: true,
                message: "OTP sent successfully. Please check your email.",
                data: user
            });
        } else {
            return res.json({
                success: false,
                message: "Sorry, this email does not exist!",
                data: null
            });
        }
    } catch (error) {
        console.error("Error in sending OTP:", error);
        return res.json({
            success: false,
            message: "Server error",
            data: null
        });
    }
};



const postVerifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const otpData = await Otp.findOne({ email, code: otp });

        if (!otpData) {
            return res.json({ success: false, message: "Invalid OTP code." });
        }

        const currentTime = new Date().getTime();
        if (otpData.expiereIn < currentTime) {
            return res.json({ success: false, message: "OTP code has expired." });
        }

        return res.json({ success: true, message: "OTP verified." });
    } catch (error) {
        console.error("OTP verification error:", error);
        return res.json({ success: false, message: "Server error" });
    }
}

const postChangePassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;


        const otpData = await Otp.findOne({ email, code: otp });

        if (!otpData) {
            return res.json({
                success: false,
                message: "Invalid OTP code.",
            });
        }


        const currentTime = new Date().getTime();
        if (otpData.expiereIn < currentTime) {
            return res.json({
                success: false,
                message: "OTP code has expired.",
            });
        }


        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.updateOne({ email }, { password: hashedPassword });


        await Otp.deleteOne({ email, code: otp });

        return res.json({
            success: true,
            message: "Password has been successfully changed.",
        });

    } catch (error) {
        console.error("Change password error:", error);
        return res.json({
            success: false,
            message: "Server error",
        });
    }
};


export { postSignup, postLogin, postEmailSend, postChangePassword, postVerifyOtp }
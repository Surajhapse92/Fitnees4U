import React, { useState } from 'react';
import './ForgetPassword.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false); 
    const [otpVerified, setOtpVerified] = useState(false);  
    const [otp, setOtp] = useState(""); 
    const [newPassword, setNewPassword] = useState(""); 

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    // Function to send OTP
    const sendOtp = async () => {

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/email-send`, { email });

            if (response.data.success) {
                toast.success(response.data.message);
                setOtpSent(true);  
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    // Function to handle OTP verification
    const handleOtpSubmit = async () => {
        if (!otp) {
            toast.error("Please enter the OTP.");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/verify-otp`, { email, otp });

            if (response.data.success) {
                toast.success("OTP verified. You can now change your password.");
                setOtpVerified(true);  
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Invalid OTP. Please try again.");
        }
    };

    // Function to change password
    const handlePasswordChange = async () => {
        if (!newPassword) {
            toast.error("Please enter a new password.");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/change-password`, {
                email,
                otp,
                newPassword,
            });

            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error changing password. Please try again.");
        }
    };

    return (
        <>
            <div className='login-main-div'>
                <div className="forgot-container">
                    <div className="forgot-password-container">
                        <h2>Forgot Password</h2>
                       
                        {/* Email form: Shown when OTP is not yet sent */}
                        {!otpSent && (
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Enter your email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="email"
                                    />
                                </div>
                                <div className='forget-btns'>
                                    <button type="button" onClick={sendOtp}>Send OTP</button>
                                    <button type="button"><Link to="/login" >Back</Link> </button>
                                </div>
                            </form>
                        )}

                        {/* OTP form: Shown when OTP is sent but not yet verified */}
                        {otpSent && !otpVerified && (
                            <form>
                                <div className="form-group">
                                    <label htmlFor="otp">Enter OTP:</label>
                                    <input
                                        type="text"
                                        id="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                        placeholder="0 0 0 0"
                                    />
                                </div>
                                <div className='forget-btns'>
                                    <button type="button" onClick={handleOtpSubmit}>Verify OTP</button>
                                    <button type="button" onClick={()=>{
                                        setOtp('')
                                        setOtpSent(false)
                                        setOtpVerified(false)
                                    }}> Back </button>
                                </div>
                            </form>
                        )}

                        {/* New password form: Shown when OTP is verified */}
                        {otpVerified && (
                            <form>
                                <div className="form-group">
                                    <label htmlFor="newPassword">Enter New Password:</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        placeholder="Enter New Password"
                                    />
                                </div>
                                <div className='forget-btns'>
                                <Link to="/login" >  <button type="button" onClick={handlePasswordChange}> <span className='change-password'>Change Password</span> </button> </Link>
                                    <button type="button" onClick={()=>{
                                        setOtp('')
                                        setOtpSent(false)
                                        setOtpVerified(false)
                                        setNewPassword('')
                                    }}> Back </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default ForgetPassword;

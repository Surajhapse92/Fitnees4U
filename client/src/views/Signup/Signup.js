import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Signup() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        number: ''
    });

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const validateNumber = (number) => {
        const pattern = /^[6-9]\d{9}$/;
        return pattern.test(number);
    };

    const signup = async () => {

        if(!user.fullName && !user.email && !user.password && !user.number)
        {
            toast.error('Please all Fields.');
            return;
        }
        
        if (!validateEmail(user.email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!validateNumber(user.number)) {
            toast.error('Please enter a valid mobile number.');
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
                fullName: user.fullName,
                email: user.email,
                password: user.password,
                number: user.number
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setUser({
                    fullName: '',
                    email: '',
                    password: '',
                    number: ''
                });

                setTimeout(() => {
                    window.location.href = '/login'
                }, 1000)
            } else {
                toast.error("Sorry, Email already Exist...");
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    const clear = ()=>{
        setUser({
            fullName: '',
            email: '',
            password: '',
            number: ''
        });
    }

    return (
        <div className='signup-main-div'>
            <div className='signup-container'>
                <h2>User Registration</h2>

                <form className='signup-form'>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={user.fullName}
                        onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                    <input
                        type="text"
                        placeholder="Mobile Number"
                        value={user.number}
                        onChange={(e) => setUser({ ...user, number: e.target.value })}
                    />

                    <div className='signup-btn-container'>
                        <button
                            type='button'
                            onClick={signup}
                            className='link-btn'
                        >
                            Register
                        </button>
                        <button
                            type='reset'
                            onClick={clear}
                            className='link-btn'
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                <Link to='/login'>Already have an account? Login</Link>

                <Toaster />
                <p>
          <a href="https://suraj-hapse-porfolio.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          ©2025 Fitness 4 U | (SH) All rights reserved.
          </a></p>
            </div>
        </div>
    );
}

export default Signup;

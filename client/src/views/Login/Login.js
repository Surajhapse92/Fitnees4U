import React, { useState, useEffect } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginNow = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    })

    if (response.data.success) {
      toast.success(response.data.message)

      localStorage.setItem('currentUser', JSON.stringify(response.data.data))

      toast.loading('Redirecting to dashboard...')

      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    } else {
      toast.error(response.data.message)
    }
  }

  const clear = () => {
    setEmail('')
    setPassword('')
  }


  return (
    <div className='login-main-div'>
      <div className="login-container">
        <div className='lg'>
          <div className='user active'>
            <Link to='/login' className='admin'>User Login</Link>
          </div>
          <div className='user'>
            <Link to="/adminlogin" className='admin'>Admin</Link>
          </div>
        </div>

        <form >
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to='/forget-password' className='forgot'>Forgot Password?</Link>

          <div className='login-btn-container'>
            <button
              type='button'
              onClick={loginNow}
            >
              Login
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

        <Link to='/signup' >Don't have an account? Signup</Link>

        <Toaster />
        <p>
          <a href="https://suraj-hapse-porfolio.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          ©2025 Fitness 4 U | (SH) All rights reserved.
          </a></p>
      </div>
    </div>
  )
}

export default Login
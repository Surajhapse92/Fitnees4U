import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar from '../../componets/Navbar/Navbar'
import Footer from '../../componets/Footer/Footer'
import mayurImg from "./mayur-about.jpg"
import rahulImg from "./rahul-about.jpg"
import membershipImg from './membership.png'
import pencilImg from './pencil.png'
import scheduleImg from './schedule.png'
import { Link } from 'react-router-dom'
import bgVideo from './bg.mp4'

function Home() {
    const [user, setUser] = useState('')
    const [day, setDay] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))

        if (currentUser) {
            setUser(currentUser)
        }

        // if (!currentUser) {
        //     window.location.href = '/login'
        // }
        if (!currentUser) {
            window.location.href = '/welcome'
        }
    }, [])

    useEffect(() => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        const day = weekday[d.getDay()];

        setDay(weekday[d.getDay()])
        setMsg(day === "Sunday" ? "Closed" : "Opened")
    }, [])


    return (<>
        <div className='Home-main-container'>     
           <Navbar active="home"/>
            <div className="banner">
                <video autoPlay loop muted playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>

            <div className="mid">
                <h1 className='home-greeting'>Hello {user.fullName}</h1>
                <p>New way to build a healthy lifestyle</p>
                <h2>UPGRADE YOUR BODY AT FITNESS<span className="four slideright">4</span>U</h2>
                <div className="btn-container">
                    <Link to="/member" className="simple">Get Started</Link>
                    <Link to="/about" className="border">Learn more</Link>
                </div>
            </div>

            <div className="details">
             
                <div className="one">
                    <h3>New to the Fitness<span className="four">4</span>U?</h3>
                    <h6>Your membership is up to 2 months FREE (Rs.200 per month)</h6>
                    <p>Our Monthly fee is Rs.500 if you take 2 months admission then fee will be Rs.800
                    </p>
                    <Link to="/member" className="btn1">Become a member today</Link>
                </div>
                <div className="two">
                    <h3>Working Hours</h3>
                    <br />
                    <div className='msg'>
                        <h5 id="day">{day} : </h5> <p className='blink'> {msg} </p>
                    </div>
                    <p className='text-blur'>Morning : 5:00 AM - 10:00 PM</p>
                    <p className='text-blur'>Evening : 5:00 PM - 10:00 PM</p>
                    <br />
                    <h5>Monday - Saturday</h5>
                    <h5>Sunday : Close</h5>
                </div>
            </div>

            <div className="trainer">
                <div className="about">
                    <h2>Hello, We are Fitness<span className="four">4</span>U</h2>
                    <p>Our gym is more than just a place to work out; it's a hub for wellness, motivation, and camaraderie.
                        Located in the heart of Babhaleshwar, our state-of-the-art facility offers a diverse range of
                        equipment and classNamees to cater to all fitness levels and interests.
                        <br /> <br />
                        Step inside our modern, spacious gym and you'll find a dynamic atmosphere buzzing with energy. Whether
                        you're a seasoned athlete or just starting your fitness journey, our expert staff is here to guide and
                        support you every step of the way.
                    </p>
                    <Link to="/about" > <button type="button" className="lbtn">Learn more </button> </Link>
                </div>
                <div className="people">
                    <div className="team1" id="team1">
                        <div className="img">
                            <img src={mayurImg} alt="team1" onClick={() => {
                                const desc1 = document.getElementById('desc1');
                                desc1.innerText = "20 Years Experiance";
                            }} />
                        </div>
                        <div className="teamDetails">
                            <div className="name">
                                <h4>Mayur Darandale</h4>
                                <a href="https://www.instagram.com/_suraj_hapse_07?igsh=ZTN4eTJybWoxbGJj&utm_source=qr" target="_blank"><i
                                    className="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <div className="pro">
                                <p>Trainer</p>
                                <a href="" target="_blank"><i
                                    className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="description" id="desc1"></div>
                        </div>
                    </div>

                    <div className="team1" id="team2">
                        <div className="img">
                            <img src={rahulImg} alt="team1" onClick={() => {
                                const desc1 = document.getElementById('desc2');
                                desc1.innerText = "10 Years Experiance";
                            }} />
                        </div>
                        <div className="teamDetails">
                            <div className="name">
                                <h4>Rahul Haral</h4>
                                <a href="https://www.facebook.com/rahul.haral.54" target="_blank"><i
                                    className="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <div className="pro">
                                <p>Trainer</p>
                                <a href="https://www.instagram.com/haral.rahul?igsh=MWEzNTNudjl1YXlpdA==" target="_blank"><i
                                    className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="description" id="desc2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="protein-container">
                <div className="protein-card">
                    <div className="card" id="card">
                        <img src={membershipImg} alt="img not found " />
                        <h2><Link to="/member">Get MemberShip</Link></h2>
                    </div>
                    <div className="card card2" id="card2">
                        <img src={pencilImg} alt="img not found " />
                        <h2><Link to="/makediet" >Make Your Diet Plan</Link></h2>
                    </div>
                    <div className="card" id="card3">
                        <img src={scheduleImg} alt="img not found " />
                        <h2><Link to="/makediet" > View Your Diet Plan</Link></h2>
                    </div>
                </div>
            </div>

            <h1 className="heading-process">OUR PROCESS</h1>
            <div className="process-container">
                <div className="processes">
                    <div className="card" id="pcard1">
                        <i className="fa-regular fa-chart-bar"></i>
                        <h2>Analyse Your Goal</h2>
                    </div>
                    <div className="card" id="pcard2">
                        <i className="fa-solid fa-flask"></i>
                        <h2>Work hard on it</h2>
                    </div>
                    <div className="card" id="pcard3">
                        <i className="fa-solid fa-gauge-high"></i>
                        <h2>improve you</h2>
                    </div>
                    <div className="card" id="pcard4">
                        <i className="fa-regular fa-gem"></i>
                        <h2>Achieve your destiny</h2>
                    </div>
                </div>
            </div>

            <Footer />



        </div >
    </>
    )
}

export default Home
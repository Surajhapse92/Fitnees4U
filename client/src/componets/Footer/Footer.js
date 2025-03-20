import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <h3>Contact Us</h3>
                        <div className="contact">
                            <i className="far fa-envelope"></i>
                            <p><a href="mailto:Demo@gmail.com">Demo@gmail.com</a></p>
                        </div>
                        <div className="contact">
                            <i className="fas fa-phone-volume"></i><a href="tel:9322037828">
                                9322037828
                            </a>
                        </div>
                        <div className="contact">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><a href="" target="blank">
                                Nagar Manmad Road, near Bus Stand,Rahuri,Maharashtra 413705 </a></p>
                        </div>

                    </div>

                    <div className="footer-content">
                        <h3>Quick Links</h3>
                        <ul className="list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/dietplan">Diet Plan</Link>
                            </li>
                            <li>
                                <Link to="/supplememts">Supplements</Link>
                            </li>
                            <li>
                                <Link to="/member">Join Us</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-content">
                        <h3>Follow Us</h3>
                        <div className="social-media">
                            <ul>
                                <li><a href="https://suraj-hapse-porfolio.netlify.app/" target="_blank"><i
                                    className="fa-brands fa-facebook-f"></i></a> </li>
                                <li><a href="https://suraj-hapse-porfolio.netlify.app/" target="_blank"><i
                                    className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://suraj-hapse-porfolio.netlify.app/"><i className="fa-brands fa-youtube"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div >
                <div className="footer-bottom">
    
                <p>
          Copyright by <i className="fas fa-heart"></i>
          <a href="https://suraj-hapse-porfolio.netlify.app/" target="_blank" rel="noopener noreferrer"> SH All rights reserved</a>
        
        </p>
</div>
            </footer >
            <a href="tel: 9322037828"><i className="fa-solid fa-phone call"></i></a>
        </div>
    )
}

export default Footer

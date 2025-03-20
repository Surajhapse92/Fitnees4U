import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import './../../views/Home/Home.css';
import swal from 'sweetalert';
import { Drawer } from 'antd';

function Navbar({ active }) {
    const [visible, setVisible] = useState(false);
    const [msg, setMsg] = useState('');
    const [purchaseMsg, setPurchaseMsg] = useState('');
    const [notification, setNotification] = useState('notification');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        getMember();
        getPurchase();
    }, []);

    const getMember = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/member/${currentUser._id}`);
            const memberData = response.data.data;
            setMsg(memberData);

            if (memberData && memberData.status) {
                if (memberData.status === 'Accepted' || memberData.status === 'Rejected') {
                    setNotification('notificationAnimation red');
                } else {
                    setNotification('notification');
                }
            }
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    };

    const getPurchase = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/purchase/${currentUser._id}`);
            const purchaseData = response.data.data;
            setPurchaseMsg(purchaseData);

            if (purchaseData && purchaseData.status) {
                if (purchaseData.status === 'Order Accepted' || purchaseData.status === 'Order Rejected') {
                    setNotification('notificationAnimation red');
                } else {
                    setNotification('notification');
                }
            }
        } catch (error) {
            console.error("Error fetching purchase data:", error);
        }
    };

    const showPopupMember = () => {
        if (msg && msg.status) {
            if (msg.status === 'Accepted') {
                swal({
                    title: "Congratulation!",
                    text: "Now, You are our Member!",
                    icon: "success",
                    dangerMode: true
                }).then(() => {
                    setNotification('notification red');
                });
            } else if (msg.status === 'Rejected') {
                swal({
                    title: "Sorry!",
                    text: msg.reason,
                    icon: "error",
                    dangerMode: true
                }).then(() => {
                    setNotification('notification red');
                });
            } else if (msg.status === 'Not Yet') {
                setNotification('notification');
            }
        }
    };

    const showPopupPurchase = () => {
        if (purchaseMsg && purchaseMsg.status) {
            if (purchaseMsg.status === 'Order Accepted') {
                swal({
                    title: "Thank You!",
                    text: "Your Order will be delivered soon!",
                    icon: "success",
                    dangerMode: true
                }).then(() => {
                    setNotification('notification red');
                });
            } else if (purchaseMsg.status === 'Order Rejected') {
                swal({
                    title: "Sorry!",
                    text: purchaseMsg.reason,
                    icon: "error",
                    dangerMode: true
                }).then(() => {
                    setNotification('notification red');
                });
            } else if (purchaseMsg.status === 'Not Yet') {
                setNotification('notification');
            }
        }
    };

    return (
        <div>
            <header className="header" id="header">
                <Link to="/"> <i className="fa-solid fa-dumbbell"></i>Fitness<span>4</span>U </Link>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="menu-bar" id="menu-bar">
                    <i className="fa-solid fa-bars" id="menu-icon"></i>
                    <i className="fa-solid fa-xmark" id="close-icon"></i>
                </label>
                <nav className="navbar" id="navbar">
                    <Link to="/" className={active === "home" ? "activebg" : ""}>Home</Link>
                    <Link to="/about" className={active === "about" ? "activebg" : ""}>About</Link>
                    <Link to="/dietplan" className={active === "diet" ? "activebg" : ""}>Diet Plan</Link>
                    <Link to="/supplememts" className={active === "supplement" ? "activebg" : ""}>Supplements</Link>
                    <Link to="/member" className='blinkn'>Join Us</Link>
                    <span className='home-logout' onClick={() => {
                        localStorage.clear();
                        toast.success('Logged out successfully');
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 3000);
                    }}>
                        <i className="fa-solid fa-right-from-bracket hlg"></i>
                    </span>
                </nav>

                <i className={`fa-solid fa-bell ${notification}`} onClick={() => {
                    getMember();
                    getPurchase();
                    setVisible(true);
                }}></i>
            </header>

            <Drawer
                open={visible}
                title='Notification'
                onClose={() => setVisible(false)}
                className="custom-drawer"
            >
                <h3 className='member'>MemberShip Updates</h3>
                {msg && msg.status ? (
                    <p className='mg' onClick={showPopupMember}>{msg.status} Membership</p>
                ) : (
                    <p className='mgNull'>There is no update</p>
                )}
                
                <h3 className='purchase'>Supplements Updates</h3>
                {purchaseMsg && purchaseMsg.status ? (
                    <p className='mg' onClick={showPopupPurchase}>{purchaseMsg.status}</p>
                ) : (
                    <p className='mgNull'>There is no update</p>
                )}
            </Drawer>

            <Toaster />
        </div>
    );
}

export default Navbar;


import React, { useState, useEffect } from 'react';
import './Admin.css';
import MemberTable from '../../componets/MemberTable/MemberTable';
import toast, { Toaster } from 'react-hot-toast';
import SellerTable from '../../componets/SellerTable/SellerTable';

const Admin = () => {
  const [navClosed, setNavClosed] = useState(false);
  const [data, setData] = useState('MemberTable');
  const [selectedOption, setSelectedOption] = useState('MemberTable');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
      window.location.href = '/adminlogin'; // 🔴 If not logged in, redirect to login
    }
  }, []);

  const toggleNav = () => {
    setNavClosed(!navClosed);
  };

  useEffect(() => {
    const menuicn = document.getElementById('menuicn');
    if (menuicn) {
      menuicn.addEventListener('click', toggleNav);
    }

    return () => {
      if (menuicn) {
        menuicn.removeEventListener('click', toggleNav);
      }
    };
  }, [navClosed]);

  return (
    <>
      <header>
        <div className="logosec">
          <i className="fa-solid fa-bars icn menuicn" id="menuicn"></i>
          <div className="logo">Fitness<span className="four">4</span>U</div>
        </div>
      </header>

      <div className="main-container">
        <div className={`navcontainer ${navClosed ? 'navclose' : ''}`}>
          <nav className="nav">
            <div className="nav-upper-options">
              <div className={`nav-option ${selectedOption === 'MemberTable' ? 'optionbg' : ''}`}
                onClick={() => {
                  setData('MemberTable')
                  setSelectedOption('MemberTable');
                }}>
                <i className="fa-solid fa-users alg"></i>
                <h3>Members</h3>
              </div>

              <div className={`nav-option ${selectedOption === 'SellerTable' ? 'optionbg' : ''}`}
                onClick={() => {
                  setData('SellerTable')
                  setSelectedOption('SellerTable');
                }}>
                <i className="fa-solid fa-cart-shopping alg"></i>
                <h3>Sellers</h3>
              </div>

              <div className="nav-option alogout" onClick={() => {
                localStorage.clear();
                toast.success('Logged out successfully');

                setTimeout(() => {
                  window.location.href = '/adminlogin';
                }, 3000);
              }}>
                <i className="fa-solid fa-right-from-bracket fa-rotate-180 alg"></i>
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          {data === 'MemberTable' ? <MemberTable /> : <SellerTable /> }
        </div>
      </div>
      
      <Toaster />
    </>
  );
};

export default Admin;

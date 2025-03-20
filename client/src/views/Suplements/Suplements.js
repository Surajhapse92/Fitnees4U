import React, { useState } from 'react';
import swal from 'sweetalert';

import './Suplements.css';
import Navbar from '../../componets/Navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import w1Img from './supplement/whey/w1.png';
import w2Img from './supplement/whey/w2.png';
import w3Img from './supplement/whey/w3.jpg';
import w4Img from './supplement/whey/w4.jpg';

import m1Img from './supplement/mass-gainer/m1.png';
import m2Img from './supplement/mass-gainer/m2.png';
import m3Img from './supplement/mass-gainer/m3.png';
import m4Img from './supplement/mass-gainer/m4.jpg';

import b1Img from './supplement/bcaa/b1.png';
import b2Img from './supplement/bcaa/b2.png';
import b3Img from './supplement/bcaa/b3.jpg';
import b4Img from './supplement/bcaa/b4.jpg';

import c1Img from './supplement/cutting/c1.png';
import c2Img from './supplement/cutting/c2.png';
import c3Img from './supplement/cutting/c3.jpg';
import c4Img from './supplement/cutting/c4.jpg';

import plusImg from './plus.png';
import minusImg from './minus.png';
import { Link } from 'react-router-dom';

function Suplements() {
  const [selectedProduct, setSelectedProduct] = useState("product1");
  const [quantity, setQuantity] = useState(1);
  //const [price, setPrice] = useState(2200);

  const data = {
    product1: {
      name: " Whey Protein Powder",
      MRP: "3,699",
      price: "2200",
      desc: "[BUILD MUSCLE]: 30g of protein per 45g scoop provide a rich protein source to the body for building muscle.[GREATER STRENGTH]: 3g of fast-absorbing creatine monohydrate for superior muscle gains and strength.[FASTER RECOVERY]: Rich in BCAAs and Glutamic acid which ensures faster muscle recovery and growth after an intense workout.[BUILD IMMUNITY]: The antibodies that help fight diseases are actually made of protein and with a high concentration of amino acids.",
      brand: "Nutrabay",
      flavour: "chocolate",
      img: [w1Img, w2Img, w3Img, w4Img],
    },

    product2: {
      name: "Mass Gainer",
      MRP: "2,499",
      price: "1149",
      desc: "Regular Mass Gainer will let you fulfill the calorie requirements in the body. With the presence of calories you can attain all the calories that will let you gain muscle mass and you can perform more and for a longer time.Regular Mass Gainer will provide protein from high quality protein sources such as Whey and Casein. They are perfect to deliver the supreme quality of protein that will fulfill the requirement of protein in your body. With the presence of protein in this gainer you can gain muscle mass.",
      brand: "26 INCHES NUTRITION INC",
      flavour: "chocolate",
      img: [m1Img, m2Img, m3Img, m4Img],
    },

    product3: {
      name: "Bolt Nutrition BCAA",
      MRP: "999",
      price: "599",
      desc: "Muscle Recovery and Support: – Instantized BCAA powder provides 5g Branched Chain Amino Acids in each 8g serving, In The Preferred 2:1:1 Ratio Of Leucine To Isoleucine And Valine, to support muscle recovery and endurance.Intra-workout Support : Help Spare Muscle During Endurance Exercise* BCAAs Have Long Been Used By Strength And Endurance Athletes In Combination With Intense Training100% VEGAN BCAAS: With 5 g of BCAAs in each serving, this intra-workout drink helps provide rich amino acids during workout.",
      brand: "Bolt",
      flavour: "Watermelon Fizz",
      img: [b1Img, b2Img, b3Img, b4Img],
    },

    product4: {
      name: " Nutrition Power",
      MRP: "6,499",
      price: "3499",
      desc: "ADVANCE WHEY BLEND: ProQuest Nutrition Premium Blend of Advance Whey Protein (Hydrolyzed, Isolate & Concentrate) its delivers the fast absorption of peptides, Isolate – fully purest form of whey protein.WHEY PERFORMANCE: ProQuest advance whey protein new and improved Performance & Faster Recovery - Contain 3.5g BCAAs that provide extream fast recovery from longer workout by decreasing muscle soreness after hard workouts.ADDED ENZYME: ProQuest Nutrition Advance whey Protein have Digezyme latest Digestive Enzymes Technology.",
      brand: "Proquest",
      flavour: "Coffee",
      img: [c1Img, c2Img, c3Img, c4Img],
    },
  };

  const handleDetails = (productKey) => {
    setSelectedProduct(productKey);
    setQuantity(1);
    //setPrice(currentProduct.price) 

  };

  const handleImageChange = (index) => {
    document.getElementById('product-main-image').src = data[selectedProduct].img[index];
  };

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    } else {
      swal({
        title: "You can't buy more than 5 products",
        text: "Buy less than 5 Products!",
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      swal({
        title: "You can't buy less than 1 products",
        text: "Buy more than 1 Product!",
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  const totalPrice = quantity * data[selectedProduct].price;

  const handleSetValue = () => {

    const productDetails = {
      name: currentProduct.name,
      quantity: quantity,
      totalPrice: quantity * parseInt(currentProduct.price),
    };
    localStorage.setItem("productDetails", JSON.stringify(productDetails));
    
    // localStorage.setItem("totalPrice", quantity * parseInt(data[selectedProduct].price));
  };

  const currentProduct = data[selectedProduct];



  return (
    <>
      <Navbar active="supplement"/>

      <div className="products">
        <h1>Supplements</h1>
        <div className="all-products">
          <div className="product" id="product1">
            <img src={w1Img} alt="supplement " />
            <div className="product-info">
              <h4 className="pro-title">Whey Protein Powder</h4>
              <p className="pro-price">₹ 2,200</p>
              <a href="#product-container" className="btn" onClick={() => handleDetails('product1')}>Buy Now</a>
            </div>
          </div>

          <div className="product" id="product2">
            <img src={m1Img} alt="supplement " />
            <div className="product-info">
              <h4 className="pro-title">Mass Gainer</h4>
              <p className="pro-price">₹ 1,149</p>
              <a href="#product-container" className="btn" onClick={() => handleDetails('product2')}>Buy Now</a>
            </div>
          </div>

          <div className="product" id="product3">
            <img src={b1Img} alt="supplement " />
            <div className="product-info">
              <h4 className="pro-title">Bolt Nutrition BCAA</h4>
              <p className="pro-price">₹ 599</p>
              <a href="#product-container" className="btn" onClick={() => handleDetails('product3')}>Buy Now</a>
            </div>
          </div>

          <div className="product" id="product4">
            <img src={c1Img} alt="supplement " />
            <div className="product-info">
              <h4 className="pro-title">Nutrition Power</h4>
              <p className="pro-price">₹ 3499</p>
              <a href="#product-container" className="btn" onClick={() => handleDetails('product4')}>Buy Now</a>
            </div>
          </div>
        </div>
      </div>

      <div id="toggle">
        <h1 className="supplement-heading">Supplement Details</h1>
        <div className=" product-container" id="product-container">
          <div className=" product-card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img src={currentProduct.img[0]} alt="supplement" id="product-main-image" />
                </div>
              </div>
              <div className="img-select" id="small-imgs">
                {currentProduct.img.map((img, index) => (
                  <div className="img-item" key={index}>
                    <img
                      src={img}
                      alt="supplement"
                      onClick={() => handleImageChange(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-title" id="product-title"> {currentProduct.name} </h2>
              <a href="https://maps.app.goo.gl/ZCaLBy9iwxGCiZHYA" target="blank" className="product-link">visit our store</a>
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>4.7</span>
              </div>

              <div className="product-detail">
                <h2>about this item: </h2>
                <p id="desc"> {currentProduct.desc} </p>
                <ul>
                  <li>Brand: <span id="brand">{currentProduct.brand}</span></li>
                  <li>Flavour: <span id="flavour">{currentProduct.flavour}</span></li>
                  <li>Age Range: <span>Adult</span></li>
                  <li>Product Benefits : <span>Muscle Growth</span></li>
                </ul>
              </div>

              <div className="product-price">
                <p className="last-price">M.R.P.: <span id="mrp">₹{currentProduct.MRP}</span></p>
                <p className="new-price">Price: <span>₹ <span id="price">{currentProduct.price} </span> </span></p>
                <p className="new-price">Total: <span id="total-quantity"> {totalPrice}  </span></p>
                <p className="new-price">Quantity: <span id="quantity-place">{quantity}</span></p>
              </div>

              <div className="purchase-info">
                <img alt="img" src={minusImg} className="quantity-img" onClick={handleDecrement} />
                <span className="quantity-text" id="quantity-text">{quantity}</span>
                <img alt="img" src={plusImg} className="quantity-img" onClick={handleIncrement} />
                <Link to="/buynow"><button type="button" className="btn" onClick={handleSetValue}>Buy Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Suplements;



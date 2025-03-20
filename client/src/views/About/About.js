import React from 'react';
import './About.css';
import mayurImg from "./mayur-about.jpg";
import rahulImg from "./rahul-about.jpg";
import Navbar from '../../componets/Navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import oipImg from './OIP.jpeg';
import g7Img from './g7.jpg';
import g8Img from './g8.jpg';
import g3Img from './g3.jpg';
import g4Img from './g4.jpg';
import g1Img from './g1.jpg';
import g2Img from './g2.jpg';
import g6Img from './img/gym/g6.jpg';
import backImg from './img/back.jpg';
import rahul1Img from './img/trainer/rahul-1.jpg';
import b5Img from './img/body-show/b5.jpg';
import tr1Img from './img/trainer/tr1.jpg';
import b2Img from './img/body-show/b2.jpg';
import b6Img from './img/body-show/b6.jpg';
import awardImg from './img/price/award.jpg';
import b1Img from "./img/body-show/b1.jpg";
import b3Img from "./img/body-show/b3.jpg";
import b7Img from './img/price/b7.jpg';
import priceImg from './img/price/price.jpg';
import eventImg from './img/body-show/event.jpg';
import b4Img from './img/price/b4.jpg';
import trainerImg from './img/price/trainer.jpg';
import price2Img from './img/price/price2.jpg';
import v1Img from './video/group.mp4';
import v2Img from './video/mainTrainer.mp4';
import v3Img from './video/train.mp4';
import v4Img from './video/workout.mp4';

function About() {
  function change(path) {
    let imgElement = document.getElementById('product-main-image');

    switch (path) {
      case 'g7':
        imgElement.src = g7Img;
        break;
      case 'g8':
        imgElement.src = g8Img;
        break;
      case 'g3':
        imgElement.src = g3Img;
        break;
      case 'g4':
        imgElement.src = g4Img;
        break;
      case 'g1':
        imgElement.src = g1Img;
        break;
      case 'g2':
        imgElement.src = g2Img;
        break;
      default:
        break;
    }
  }

  function showAll() {
    const imgs = [g6Img, backImg, rahul1Img, b5Img, tr1Img, b2Img, b6Img, awardImg];

    const imgElement = document.getElementById('img');
    document.getElementById('showAll').classList.add("active");
    document.getElementById('bodyShow').classList.remove("active");
    document.getElementById('prices').classList.remove("active");
    document.getElementById('videos').classList.remove("active");

    imgElement.innerHTML = "";

    for (let i = 0; i < imgs.length; i++) {
      imgElement.innerHTML += `<div class="imgs"><img src="${imgs[i]}" alt="image not found" /></div>`;
    }
  }

  function bodyShow() {
    const imgs = [b1Img, b2Img, b3Img, b5Img, b7Img, priceImg, b6Img, eventImg];

    const imgElement = document.getElementById('img');
    document.getElementById('showAll').classList.remove("active");
    document.getElementById('bodyShow').classList.add("active");
    document.getElementById('prices').classList.remove("active");
    document.getElementById('videos').classList.remove("active");

    imgElement.innerHTML = "";
    for (let i = 0; i < imgs.length; i++) {
      imgElement.innerHTML += `<div class="imgs"><img src="${imgs[i]}" alt="image not found" /></div>`;
    }
  }

  function prices() {
    const imgs = [awardImg, b4Img, b7Img, b3Img, b2Img, b6Img, trainerImg, price2Img];

    const imgElement = document.getElementById('img');
    document.getElementById('showAll').classList.remove("active");
    document.getElementById('bodyShow').classList.remove("active");
    document.getElementById('prices').classList.add("active");
    document.getElementById('videos').classList.remove("active");

    imgElement.innerHTML = "";

    for (let i = 0; i < imgs.length; i++) {
      imgElement.innerHTML += `<div class="imgs"><img src="${imgs[i]}" alt="image not found" /></div>`;
    }
  }

  function videos() {
    const vids = [v1Img, v2Img, v3Img, v4Img];

    const imgElement = document.getElementById('img');
    document.getElementById('showAll').classList.remove("active");
    document.getElementById('bodyShow').classList.remove("active");
    document.getElementById('prices').classList.remove("active");
    document.getElementById('videos').classList.add("active");

    imgElement.innerHTML = "";

    for (let i = 0; i < vids.length; i++) {
      imgElement.innerHTML += `<div class="imgs">
            <video height="300px" width="300px" controls autoplay muted className='videoa'>
              <source src="${vids[i]}" type="video/mp4" />
            </video>
          </div>`;
    }
  }

  return (
    <div>
      <Navbar active="about" />
      <div className="trainer">
        <div className="about">
          <h2>Hello, We are Fitness<span className="four">4</span>U</h2>
          <p>Our gym is more than just a place to work out; it's a hub for wellness, motivation, and camaraderie.
            Located in the heart of Babhaleshwar, our state-of-the-art facility offers a diverse range of
            equipment and classes to cater to all fitness levels and interests.
            <br /><br />
            Step inside our modern, spacious gym and you'll find a dynamic atmosphere buzzing with energy. Whether
            you're a seasoned athlete or just starting your fitness journey, our expert staff is here to guide and
            support you every step of the way.
          </p>
          {/* <a href="./pages/about.html"> <button type="button" className="btn">Learn more </button> </a> */}
        </div>
        <div className="people">
          <div className="team1" id="team1">
            <div className="img">
              <img src={mayurImg} alt="team1" onClick={() => {
                const desc1 = document.getElementById('desc1');
                desc1.innerText = "20 Years Experience";
              }} />
            </div>
            <div className="teamDetails">
              <div className="name">
                <h4>Mayur Darandale</h4>
                <a href="https://www.facebook.com/mayur.darndale" target="_blank" rel="noreferrer"><i
                  className="fa-brands fa-facebook-f"></i></a>
              </div>
              <div className="pro">
                <p>Trainer</p>
                <a href="https://www.instagram.com/md_mayur93?igsh=MWl6dDFpeDlldWxnMw==" target="_blank" rel="noreferrer"><i
                  className="fa-brands fa-instagram"></i></a>
              </div>
              <div className="description" id="desc1"></div>
            </div>
          </div>

          <div className="team1" id="team2">
            <div className="img">
              <img src={rahulImg} alt="team2" onClick={() => {
                const desc1 = document.getElementById('desc2');
                desc1.innerText = "10 Years Experience";
              }} />
            </div>
            <div className="teamDetails">
              <div className="name">
                <h4>Rahul Haral</h4>
                <a href="https://www.facebook.com/rahul.haral.54" target="_blank" rel="noreferrer"><i
                  className="fa-brands fa-facebook-f"></i></a>
              </div>
              <div className="pro">
                <p>Trainer</p>
                <a href="https://www.instagram.com/haral.rahul?igsh=MWEzNTNudjl1YXlpdA==" target="_blank" rel="noreferrer"><i
                  className="fa-brands fa-instagram"></i></a>
              </div>
              <div className="description" id="desc2"></div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="see-gym">See Our GYM </h2>
      <img src={oipImg} alt="image not found" id="product-main-image" />
      <div className="images-container">
        <img src={g7Img} alt="image not found" className="product-image" onClick={() => change('g7')} />
        <img src={g8Img} alt="image not found" className="product-image" onClick={() => change('g8')} />
        <img src={g3Img} alt="image not found" className="product-image" onClick={() => change('g3')} />
        <img src={g4Img} alt="image not found" className="product-image" onClick={() => change('g4')} />
        <img src={g1Img} alt="image not found" className="product-image" onClick={() => change('g1')} />
        <img src={g2Img} alt="image not found" className="product-image" onClick={() => change('g2')} />
      </div>

      <div className="gallary-container">
        <div className="btn-container">
          <button type="button" className="active" id="showAll" onClick={showAll}>Show All</button>
          <button type="button" id="bodyShow" onClick={bodyShow}>Body Show </button>
          <button type="button" id="prices" onClick={prices}>Prices </button>
          <button type="button" id="videos" onClick={videos}>Videos</button>
        </div>
        <div className="img-container" id="img">
          <div className="imgs">
            <img src={g6Img} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={backImg} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={rahul1Img} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={b5Img} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={tr1Img} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={b2Img} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={b6Img} alt="image not found" />
          </div>

          <div className="imgs">
            <img src={awardImg} alt="image not found" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;


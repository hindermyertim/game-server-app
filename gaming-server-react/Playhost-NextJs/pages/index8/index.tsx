import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import Link from 'next/link';
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import SwiperComponent from '../../component/section-pages/slider-home-3';
import Section1 from '../../component/section-pages/section-1-notitle-noicon';
import Sectiontesti from '../../component/section-pages/section-testimonial';
import Collection from '../../component/section-pages/Collection-notitle';
import Help from '../../component/section-pages/help-no-title';
import Payment from '../../component/section-pages/Payment';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

import Aos from 'aos';
import "aos/dist/aos.css";


const image1 ="../../img/background/bg-grid-2.webp";
const image2 ="../../img/background/space.webp";

const GlobalStyles = createGlobalStyle`
    @media (min-width: 1000px) {
      .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1240px;
      }
    }
    h1.slider-title.s2 {
      font-size: 64px;
      letter-spacing: -2px;
      text-transform: none !important;
    }
    * {
      --primary-color: #5623d8;
      --primary-color-rgb: 86, 35, 216;
      --secondary-color: #6a79fa;
      --secondary-color-rgb: 106, 121, 250;
      --tertiary-color: #e615af;
      --tertiary-color-rgb: rgba(230, 21, 175, 1.0);
      --bg-dark-1: #010314;
      --bg-dark-1-rgb: 0 ,0 ,2;
      --bg-dark-2: #060608;
      --bg-dark-3: #383339;
      --dark-body-font-color: #9a99b1;
      --gradient-text: 45deg,#ffffff 0%, #aaaaaa 100%;
      --body-font-weight: 400;
    }
    .text-gradient {
      background: -webkit-linear-gradient(45deg,var(--primary-color) 0%, var(--secondary-color) 100%);
      background: -moz-linear-gradient(45deg,var(--primary-color) 0%, var(--secondary-color) 100%);
      background: linear-gradient(45deg,var(--primary-color) 0%, var(--secondary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .de-gradient-edge-bottom{
      background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .de-gradient-edge-top{
      background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%);
    }
    .widget{
      margin-top:30px;
    }
    h4{font-size: 20px;}
    .dark-scheme .de-gradient-edge-top {
      background: linear-gradient(180deg, rgba(var(--bg-dark-1-rgb), 1) 0%, rgba(var(--bg-dark-1-rgb), 0) 100%);
    }
    .dark-scheme .de-gradient-edge-bottom {
      background: linear-gradient(0deg, rgba(var(--bg-dark-1-rgb), 1) 0%, rgba(var(--bg-dark-1-rgb), 0) 100%);
    }
`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
      Aos.init({
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 0,
        mirror: true
      });
    }, []);
  return (
    <>
    <Head>
      <title>Playhost - Game Hosting Website Template</title>
      <link rel="icon" href="../img/icon.png" type="image/gif" sizes="16x16"/>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* slider */}
      <Parallax className="" bgImage={image1} strength={50}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="py-4 no-bg">
          <SwiperComponent />
        </section>
      </Parallax>

      {/* section */}
      <section className="tex-center">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="subtitle mb-3" 
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Incredibly features</div>
                  <h2 className="mb20 fadeInUp" 
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Premium Game Server</h2>
              </div>
          </div>
        </div>
        <Section1/>
      </section>

      {/* section */}
      <section className="no-padding">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="subtitle mb-3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Testimonials</div>
                  <h2 className="mb20"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">What They Says</h2>
              </div>
          </div>
        </div>
        <Sectiontesti/>
      </section>

      {/* section */}
      <Parallax className="" bgImage={image2} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <div className="subtitle mb20" 
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Most complete</div>
                  <h2 className="wow fadeInUp"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Game <span className="text-gradient">Collection</span></h2>
                  <div className="spacer-20"></div>
              </div>
              <div className="col-lg-6 text-lg-end">
                  <Link className="btn-main mb-sm-30" href="#">View all games</Link>
              </div>
            </div>
            </div>
          <Collection/>
        </section>
      </Parallax>

      {/* section */}
      <section className="no-padding">
      <div className="container">
            <div className="row">
                <div className="col-lg-6">                            
                    <div className="subtitle  mb-3"
                    data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Do you have</div>
                    <h2 className=" mb20"
                    data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="0"
                  data-aos-easing="ease"
                  data-aos-once="true">Any <span className="text-gradient">questions?</span> </h2>
                </div>
            </div>
        </div>
        <Help/>
      </section>

      {/* section */}
      <section>
        <Payment/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

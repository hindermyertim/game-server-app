import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import SwiperComponent from '../../component/section-pages/slider-3-col';
import Sectioncol from '../../component/section-pages/section-3col';
import Section2 from '../../component/section-pages/section-2';
import Section1 from '../../component/section-pages/section-1';
import Reviews from '../../component/section-pages/CustomerReviews';
import Contact from '../../component/section-pages/contact';
import Servers from '../../component/section-pages/Server';
import Collection from '../../component/section-pages/Collection';
import Help from '../../component/section-pages/help';
import Download from '../../component/section-pages/Download';
import Payment from '../../component/section-pages/Payment';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/background/3.webp";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
    #slider .smallslider{ 
      height: 75vh;
      .img-fluid{
        height: 65vh;
        object-fit: cover;
        object-position: top;
      }
      .de-item .d-overlay .d-text h4 {
          font-size: 32px;
          border-bottom: solid 1px rgba(255, 255, 255, .5);
          padding-bottom: 15px;
          background: linear-gradient(0deg,#888888 0%, #ffffff 75%);
          background-clip: border-box;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
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
      <section className="pt90 no-bottom" id="slider">
        <SwiperComponent />
      </section>

      {/* section */}
      <section className="pt60 no-bottom">
        <Servers/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Section1/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Section2/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Reviews/>
      </section>

      {/* section */}
      <Parallax className="" bgImage={image1} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
          <Collection/>
        </section>
      </Parallax>

      {/* section */}
      <section className="no-top no-bottom">
        <Help/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Download/>
      </section>

      {/* section */}
      <section className="">
        <Payment/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

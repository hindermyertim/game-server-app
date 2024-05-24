import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Homestatic from '../../component/section-pages/homestatic';
import Marquee from '../../component/section-pages/marquee';
import Pricelist from '../../component/section-pages/pricelist';
import Section2 from '../../component/section-pages/section-2';
import Section1 from '../../component/section-pages/section-1';
import Reviews from '../../component/section-pages/CustomerReviews';
import Contact from '../../component/section-pages/contact';
import Servers from '../../component/section-pages/Server';
import Collection from '../../component/section-pages/Collection';
import Help from '../../component/section-pages/help';
import Payment from '../../component/section-pages/Payment';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/background/3.webp";
const image2 ="../../img/background/4.webp";
const image3 ="../../img/background/5.webp";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
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
      <Parallax className="bgcolor" bgImage={image2} strength={300}>  
        <section id="content" className="pt60 no-bottom">
          <Homestatic />
        </section>
       </Parallax>
      
      {/* section */}
      <section className="no-bottom">
        <Marquee/>
      </section>

      {/* section */}
      <Parallax className="" bgImage={image3} strength={150}> 
      <section className="no-bg pt60 no-bottom">
        <Pricelist/>
      </section>
      </Parallax>

      {/* section */}
      <section className="no-bottom">
        <Collection/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Section1/>
      </section>

      {/* section 3 */}
      <Parallax className="" bgImage={image3} strength={300}> 
      <div className="de-gradient-edge-top"></div>
      <div className="de-gradient-edge-bottom"></div>
      <section className="no-bg no-bottom">
        <Reviews/>
      </section>
      </Parallax>

      {/* section */}
      <section className="no-bottom">
        <Help/>
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

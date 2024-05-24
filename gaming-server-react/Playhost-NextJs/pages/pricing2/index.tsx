import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Pricelist from '../../component/section-pages/pricelist-static';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

import image1 from "../../public/img/covers/1.webp";
const image2 ="../../img/background/galactic-oddsey.webp";

const GlobalStyles = createGlobalStyle`
  .dark-scheme .de_pricing-table.type-2{
    background: rgba(30, 31, 34, .75);
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

      <Parallax className="bgcolor" bgImage={image2} strength={5}>  
      <div className="de-gradient-edge-top"></div>
      <div className="de-gradient-edge-bottom"></div>
      <section className="no-bg">
        <div className="container z-9">
          <div className="row align-items-center">
              <div className="col-lg-12">
                  <div className="subtitle wow fadeInUp mb-3">Server Hosting</div>
              </div>
              <div className="col-lg-6">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Galactic Odyssey</h2>
                  <div className="spacer-20"></div>
              </div>
          </div>
        </div>
        <Pricelist/>
      </section>
      </Parallax>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

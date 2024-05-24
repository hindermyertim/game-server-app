import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Pricelist from '../../component/section-pages/pricelist-1';
import Section1 from '../../component/section-pages/section-1';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

import image1 from "../../public/img/covers/1.webp";
const image2 ="../../img/background/subheader-game.webp";

const GlobalStyles = createGlobalStyle`

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

      <Parallax className="bgcolor" bgImage={image2} strength={300}>  
      <div className="de-gradient-edge-bottom"></div>
      <section className="no-bg">
        <div className="container z-1000">
              <div className="row gx-5 align-items-center">
                  <div className="col-lg-2 d-lg-block d-none">
                      <Image src={image1} className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle wow fadeInUp mb-3">Server hosting</div>
                      <h2 className="mb-0">Thunder and City</h2>
                      <div className="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
                          <span className="d-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half"></i>
                          </span>
                          <span className="d-val">4.75</span>
                          based on <strong>4086</strong> reviews.
                      </div>
                  </div>      
              </div>
          </div>
      </section>
      </Parallax>

      {/* section */}
      <section className="no-top">
        <Pricelist/>
      </section>

      {/* section */}
      <section className="no-top">
        <Section1/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

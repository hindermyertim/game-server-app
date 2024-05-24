import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Homestatic from '../../component/section-pages/homestatic-video';
import Section1 from '../../component/section-pages/section-1-center';
import Location from '../../component/section-pages/Location-center';
import Contact from '../../component/section-pages/contact';
import Pricelist from '../../component/section-pages/pricelist-center';
import Collection from '../../component/section-pages/Collection-center';
import Help from '../../component/section-pages/help-center';
import Blog from '../../component/section-pages/Blog';
import Payment from '../../component/section-pages/Payment';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/background/3.webp";

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

      {/* home static */}
      <section className="no-padding">
        <Homestatic/>
      </section>

      {/* section */}
      <section className="no-bottom tex-center">
        <Section1/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Pricelist/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Collection/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Location/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Help/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Blog/>
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

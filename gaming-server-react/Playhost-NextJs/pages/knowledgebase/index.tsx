import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Knowlege from '../../component/section-pages/knowlege';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/background/space.webp";

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

      {/* section */}
      <Parallax className="" bgImage={image1} strength={5}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12 mb-3 text-center">
                      <div className="subtitle wow fadeInUp mb-3">Information center</div>
                      <h2 className="wow fadeInUp mb-3" data-wow-delay=".2s">Knowledgebase</h2>
                  </div>         

                  <div className="col-md-8 offset-md-2 text-center">
                      <form action='#' className="row" id='form_sb'>
                          <div className="col">
                              <div className="spacer-10"></div>
                              <input className="form-control" id='domain_name' name='domain_name' placeholder="type your questions here" type='text'/> 
                              <a id="btn-submit" href="#">
                                <i className="arrow_right"></i>
                              </a>
                              <div className="clearfix"></div>
                          </div>
                      </form>
                      <div className="spacer-20"></div>
                      <p className="d-small">*eg. server setup, change hosting plan</p>
                  </div>        
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section className="no-top">
        <Knowlege/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

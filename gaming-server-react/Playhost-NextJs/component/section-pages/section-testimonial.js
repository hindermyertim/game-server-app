import React from 'react';
import { Parallax } from "react-parallax";
import { createGlobalStyle } from 'styled-components';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

const image1 ="../img/background/4.webp";
const client1 ="../img/clients/1.webp";
const client2 ="../img/clients/2.webp";
const client3 ="../img/clients/3.webp";
const client4 ="../img/clients/4.webp";

const GlobalStyles = createGlobalStyle`
    section .react-parallax-bgimage, .section .react-parallax-bgimage{
        top: 0;
    }
`;


const Section = () => {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
        <div className="container">
            <GlobalStyles/>
            <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="de-testi-a rounded-20 bg-dark-2 overflow-hidden s2 h-100 jarallax">
                                <Parallax className="rounded-20" bgImage={image1} strength={300}>
                                <div className="d-quote"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="0"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                                    <div className="de-rating-ext mb-3">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <p>Their servers are lightning-fast, and their customer support is top-notch. I highly recommend them to any gamer looking for a premium hosting experience.</p>
                                </div>
                                <div className="d-by">
                                    <div className="d-name id-color">Lucas Thompson</div>
                                    <div className="d-info">Enthusiast Gamer</div>
                                </div>
                                <img src={client1} className="d-img"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="0"
                                data-aos-easing="ease"
                                data-aos-once="true"
                                 alt=""/>
                                </Parallax>
                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="de-testi-a rounded-20 bg-dark-2 overflow-hidden s2 h-100 jarallax">
                                <Parallax className="rounded-20" bgImage={image1} strength={300}>
                                <div className="d-quote"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="0"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                                    <div className="de-rating-ext mb-3">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <p>Their intuitive control panel guided me through every step of setting up and managing my server, and their extensive knowledge base provided answers to all of my questions.</p>
                                </div>
                                <div className="d-by">
                                    <div className="d-name id-color">Olivia Parker</div>
                                    <div className="d-info">Enthusiast Gamer</div>
                                </div>
                                <img src={client2}  className="d-img"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="0"
                                data-aos-easing="ease"
                                data-aos-once="true"
                                 alt=""/>
                                </Parallax>
                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="de-testi-a rounded-20 bg-dark-2 overflow-hidden s2 h-100 jarallax">
                                <Parallax className="rounded-20" bgImage={image1} strength={300}>
                                <div className="d-quote"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="0"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                                    <div className="de-rating-ext mb-3">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <p>Their automated backup system has saved me from countless headaches, ensuring that my players' progress is always protected. Plus, their integrated voice chat. </p>
                                </div>
                                <div className="d-by">
                                    <div className="d-name id-color">Ethan Rodriguez</div>
                                    <div className="d-info">Enthusiast Gamer</div>
                                </div>
                                <img src={client3}  className="d-img"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="0"
                                data-aos-easing="ease"
                                data-aos-once="true"
                                 alt=""/>
                                </Parallax>
                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="de-testi-a rounded-20 bg-dark-2 overflow-hidden s2 h-100 jarallax">
                                <Parallax className="rounded-20" bgImage={image1} strength={300}>
                                <div className="d-quote"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="0"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                                    <div className="de-rating-ext mb-3">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </div>
                                    <p>The automated mod installation feature has made it incredibly easy to customize our servers, and their competitive pricing plans fit perfectly within our budget. </p>
                                </div>
                                <div className="d-by">
                                    <div className="d-name id-color">Emily Patel</div>
                                    <div className="d-info">Enthusiast Gamer</div>
                                </div>
                                <img src={client4}  className="d-img"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="0"
                                data-aos-easing="ease"
                                data-aos-once="true"
                                 alt=""/>
                                </Parallax>
                                
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default Section;
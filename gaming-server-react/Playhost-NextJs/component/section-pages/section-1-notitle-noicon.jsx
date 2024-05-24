import React from 'react';
import { Parallax } from "react-parallax";
import { createGlobalStyle } from 'styled-components';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

const image1 ="../img/background/4.webp";

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
                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="0"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 h-100 jarallax">
                                <h4>High Performance</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>Premium Hardware</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>99.99% Uptime</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="600"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>DDoS protection</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="0"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>One Click Install</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>Integrated Voice Chat</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>Automated Backups</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-sm-20"
                            data-aos="fade-left"
                            data-aos-delay="600"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <Parallax className="rounded-20" bgImage={image1} strength={300}>
                            <div className="padding40 rounded-20 h-100 jarallax">
                                <h4>24/7 Support</h4>
                                <p className="mb-0">Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                            </Parallax>
                        </div>
                    </div>
        </div>
    );
}

export default Section;
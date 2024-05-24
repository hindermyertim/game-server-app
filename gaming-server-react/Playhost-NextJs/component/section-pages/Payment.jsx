import React from 'react';
import Image from 'next/image';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

import image1 from '../../public/img/payments/visa.webp';
import image2 from '../../public/img/payments/mastercard.webp';
import image3 from '../../public/img/payments/paypal.webp';
import image4 from '../../public/img/payments/skrill.webp';
import image5 from '../../public/img/payments/jcb.webp';
import image6 from '../../public/img/payments/american-express.webp';

const Payment = () => {
     useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
       <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle mb-3"
                                data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="0"
                                    data-aos-easing="ease"
                                    data-aos-once="true">Payment Methods</div>
                            <h2
                                data-aos="fade-left"
                                    data-aos-delay="150"
                                    data-aos-duration="0"
                                    data-aos-easing="ease"
                                    data-aos-once="true">We accept</h2>
                        </div>
                        <div className="col-lg-6"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-duration="0"
                            data-aos-easing="ease"
                            data-aos-once="true">
                            <div className="row g-4">
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image1} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image2} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image3} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image4} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image5} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image6} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Payment;
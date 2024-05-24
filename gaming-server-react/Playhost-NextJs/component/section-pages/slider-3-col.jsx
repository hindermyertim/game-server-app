import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import image1 from"../../public/img/covers/1.webp";
import image2 from"../../public/img/covers/2.webp";
import image3 from"../../public/img/covers/3.webp";
import image4 from"../../public/img/covers/4.webp";
import image5 from"../../public/img/covers/5.webp";
import image6 from"../../public/img/covers/6.webp";
import image7 from"../../public/img/covers/7.webp";
import image8 from"../../public/img/covers/8.webp";

const Customerreviews = () => {
  return (
    <div className="container-fluid">
        <div className="row">
          <Swiper className="smallslider"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView="3"
            breakpoints={{
              992: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1, // Set the minimum number of bullets to display
            }}
            centeredSlides
            loop
            slideToClickedSlide
            >
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                      <div className="d-overlay">
                          <div className="d-label">
                              20% OFF
                          </div>
                          <div className="d-text">
                              <h4>Thunder and City</h4>
                              <p className="d-price">Starting at <span className="price">$14.99</span></p>
                              <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                          </div>
                      </div>
                      <Image src={image1} className="img-fluid " alt=""/>
                  </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Mystic Racing Z</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image2} className="img-fluid " alt=""/>
                      </div>
              </div>         
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Silent Wrath</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image3} className="img-fluid " alt=""/>
                      </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Funk Dungeon</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image4} className="img-fluid " alt=""/>
                      </div>
              </div>         
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Galactic Odyssey</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image5} className="img-fluid " alt=""/>
                      </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Warfare Legends</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image6} className="img-fluid " alt=""/>
                      </div>
              </div>         
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Raceway Revolution</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image7} className="img-fluid " alt=""/>
                      </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-inner">
                  <div className="de-item wow">
                          <div className="d-overlay">
                              <div className="d-label">
                                  20% OFF
                              </div>
                              <div className="d-text">
                                  <h4>Starborne Odyssey</h4>
                                  <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                  <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                              </div>
                          </div>
                          <Image src={image8} className="img-fluid" alt=""/>
                      </div>
              </div>         
            </SwiperSlide>
          </Swiper>
      </div>   
    </div>   
  );
};
export default Customerreviews;
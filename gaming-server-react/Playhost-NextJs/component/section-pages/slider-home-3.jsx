import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const image1 ="../img/covers-square/12.webp";
const image2 ="../img/covers-square/11.webp";
const image3 ="../img/covers-square/5.webp";
const image4 ="../img/covers-square/4.webp";



const Slider = () => {
  return (
    <Swiper className="mainslider smallslider"
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={false}
      autoplay={{ delay: 4000 }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      pagination={{ clickable: true }}
      effect="fade" 
      fadeEffect={{ crossFade: true }} 
      /* pagination={{
        clickable: false,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1} <span className="swiper-pagination-current">/ 3</span></span>`;
        },
      }} */
      >
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 mb-sm-30">
                            <div className="subtitle blink mb-4">Servers Are Available</div>
                            <h1 className="slider-title text-uppercase mb-1">Shadow of<br/>Night</h1>
                            <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud.</p>
                            <div className="row">
                                <div className="col-lg-6"></div>
                            </div>
                            <div className="sw-price">
                                <div className="d-starting">
                                    Starting at
                                </div>
                                <div className="d-price">
                                    <span className="d-cur">$</span>
                                    <span className="d-val">9.99</span>
                                    <span className="d-period">/monthly</span>
                                </div>
                            </div>
                            <div className="spacer-10"></div>
                            <a className="btn-main mb10" href="pricing-table-one.html"><span>Order Your Game Server Now</span></a>
                        </div>
                        <div className="col-lg-6">
                            <img src={image1} className="img-fluid rounded-20" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="sw-caption">
                <div className="container">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 mb-sm-30">
                                    <div className="subtitle blink mb-4">Servers Are Available</div>
                                    <h1 className="slider-title text-uppercase mb-1">Alien<br/>Football</h1>
                                    <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud.</p>
                                    <div className="sw-price">
                                        <div className="d-starting">
                                            Starting at
                                        </div>
                                        <div className="d-price">
                                            <span className="d-cur">$</span>
                                            <span className="d-val">9.99</span>
                                            <span className="d-period">/monthly</span>
                                        </div>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <a className="btn-main mb10" href="pricing-table-one.html"><span>Order Your Game Server Now</span></a>
                                </div>
                                <div className="col-lg-6">
                                    <img src={image2} className="img-fluid rounded-20" alt=""/>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="sw-overlay"></div>
        </div>         
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="sw-caption">
                <div className="container">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 mb-sm-30">
                                    <div className="subtitle blink mb-4">Servers Are Available</div>
                                    <h1 className="slider-title text-uppercase mb-1">Funk<br/>Dungeon</h1>
                                    <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud.</p>
                                    <div className="sw-price">
                                        <div className="d-starting">
                                            Starting at
                                        </div>
                                        <div className="d-price">
                                            <span className="d-cur">$</span>
                                            <span className="d-val">9.99</span>
                                            <span className="d-period">/monthly</span>
                                        </div>
                                    </div>
                                    <div className="spacer-10"></div>
                                    <a className="btn-main mb10" href="pricing-table-one.html"><span>Order Your Game Server Now</span></a>
                                </div>
                                <div className="col-lg-6">
                                    <img src={image3} className="img-fluid rounded-20" alt=""/>
                                </div>
                            </div>
                        </div>
            </div>                                
            <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="sw-caption">
               <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 mb-sm-30">
                            <div className="subtitle blink mb-4">Servers Are Available</div>
                            <h1 className="slider-title text-uppercase mb-1">Galactic<br/>Oddysey</h1>
                            <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud.</p>
                            <div className="sw-price">
                                <div className="d-starting">
                                    Starting at
                                </div>
                                <div className="d-price">
                                    <span className="d-cur">$</span>
                                    <span className="d-val">9.99</span>
                                    <span className="d-period">/monthly</span>
                                </div>
                            </div>
                            <div className="spacer-10"></div>
                            <a className="btn-main mb10" href="pricing-table-one.html"><span>Order Your Game Server Now</span></a>
                        </div>
                        <div className="col-lg-6">
                            <img src={image4} className="img-fluid rounded-20" alt=""/>
                        </div>
                    </div>
                </div>
            </div>                                
            <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
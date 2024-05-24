import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import image1 from"../../public/img/people/1.jpg";
import image2 from"../../public/img/people/2.jpg";
import image3 from"../../public/img/people/3.jpg";
import image4 from"../../public/img/people/4.jpg";
import image5 from"../../public/img/people/5.jpg";
import image6 from"../../public/img/people/6.jpg";
import image7 from"../../public/img/people/7.jpg";
import image8 from"../../public/img/people/8.jpg";

const Customerreviews = () => {
  return (
    <>
    
    <Swiper className="smallslider"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      centeredSlides
      loop
      slideToClickedSlide
      >
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
              <blockquote>
                  <div className="de-rating-ext">
                      <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                      </span>
                  </div>
                  <p>&quot;I&apos;ve been using Playhost for my game server needs, and I couldn&apos;t be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues.&quot;
                  </p>
                  <div className="de_testi_by">
                      <Image alt="" src={image1}/> <span>Michael S.</span>
                  </div>
              </blockquote>
          </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <p>&quot;Running a game server used to be a hassle, but Playhost makes it easy. The control panel is user-friendly, and I love how they handle server maintenance and updates.&quot;</p>
                    <div className="de_testi_by">
                        <Image alt="" src={image2}/> <span>Robert L.</span>
                    </div>
                </blockquote>
            </div>
        </div>         
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <p>&quot;I&apos;ve tried several hosting providers in the past, and Playhost is by far the best. Their server performance is top-notch, and I&apos;ve never experienced lag while playing with friends.&quot;</p>
                    <div className="de_testi_by">
                        <Image alt="" src={image3}/> <span>Jake M.</span>
                    </div>
                </blockquote>
            </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                  <blockquote>
                      <div className="de-rating-ext">
                          <span className="d-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                          </span>
                      </div>
                      <p>As a new server owner, I was worried about setup and configuration, but Playhost made it a breeze. They have detailed tutorials and helpful support, which made the process smooth.&quot;</p>
                      <div className="de_testi_by">
                          <Image alt="" src={image4}/> <span>Alex P.</span>
                      </div>
                  </blockquote>
              </div>
        </div>         
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <p>&quot;The flexibility Playhost offers is incredible. I can easily switch between game servers or even host multiple games on the same plan. It&apos;s a gamer&apos;s dream come true!&quot;</p>
                    <div className="de_testi_by">
                        <Image alt="" src={image5}/> <span>Carlos R.</span>
                    </div>
                </blockquote>
            </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <p>&quot;I&apos;ve been a loyal customer of Playhost for years now. Their dedication to keeping their hardware up-to-date ensures my gaming experience is always optimal.&quot;</p>
                    <div className="de_testi_by">
                        <Image alt="" src={image6}/> <span>Edward B.</span>
                    </div>
                </blockquote>
            </div>
        </div>         
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <p>&quot;When our community needed a reliable server for our esports tournaments, we turned to Playhost, and they&apos;ve never let us down. Their servers are perfect for competitive gaming.&quot;</p>
                    <div className="de_testi_by">
                        <Image alt="" src={image7}/> <span>Daniel H.</span>
                    </div>
                </blockquote>
            </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <p>&quot;The DDoS protection from Playhost is a lifesaver. We used to get attacked regularly, but since switching to their servers, we haven&apos;t had any downtime.&quot;</p>
                    <div className="de_testi_by">
                        <Image alt="" src={image8}/> <span>Bryan G.</span>
                    </div>
                </blockquote>
            </div>
        </div>         
      </SwiperSlide>
    </Swiper>
    </>
  );
};
export default Customerreviews;
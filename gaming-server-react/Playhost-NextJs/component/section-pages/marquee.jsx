import React from 'react';
import Image from 'next/image';

import image1 from '../../public/img/flags/united-kingdom.png';
import image2 from '../../public/img/flags/france.png';
import image3 from '../../public/img/flags/germany.png';
import image4 from '../../public/img/flags/netherlands.png';
import image5 from '../../public/img/flags/sweden.png';
import image6 from '../../public/img/flags/finland.png';
import image7 from '../../public/img/flags/usa.png';
import image8 from '../../public/img/flags/canada.png';
import image9 from '../../public/img/flags/sg.png';
import image10 from '../../public/img/flags/australia.png';
import image11 from '../../public/img/flags/brazil.png';
import image12 from '../../public/img/flags/thailand.png';
import image13 from '../../public/img/flags/indonesia.png';


const Section = () => {
    return(
        <div className="no-bottom wow fadeInRight d-flex z-1000">
                  <div className="de-marquee-list s2 wow">
                    <div className="d-item">
                      <span className="d-item-txt"><Image src={image1} className="" alt=""/>London</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image2} className="" alt=""/>Paris</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image3} className="" alt=""/>Frankurt</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image4} className="" alt=""/>Amsterdam</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image5} className="" alt=""/>Stockholm</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image6} className="" alt=""/>Helsinki</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image7} className="" alt=""/>Los Angeles</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image8} className="" alt=""/>Quebec</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image9} className="" alt=""/>Singapore</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image10}className="" alt=""/>Sydney</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image11} className="" alt=""/>Sau Paulo</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image12} className="" alt=""/>Bangkok</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt"><Image src={image13} className="" alt=""/>Jakarta</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                     </div>
                  </div>
                </div>
    );
}

export default Section;
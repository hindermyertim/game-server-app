import React from 'react';
import Image from 'next/image';

import image1 from '../../public/img/icons/1.png';
import image2 from '../../public/img/icons/2.png';
import image3 from '../../public/img/icons/3.png';
import image4 from '../../public/img/icons/4.png';


const Section = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="subtitle mb-3">Incredibly features</div>
                    <h2 className="mb20">Premium Game Server</h2>
                </div>

                <div className="col-lg-6"></div>

                <div className="col-lg-3 col-md-6 mb-sm-20" >
                    <div>
                        <Image src={image1} className="mb20" alt=""/>
                        <h4>Super Quick Setup</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image2} className="mb20" alt=""/>
                        <h4>Premium Hardware</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image3} className="mb20" alt=""/>
                        <h4>DDos Protection</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image4} className="mb20" alt=""/>
                        <h4>Fast Support</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
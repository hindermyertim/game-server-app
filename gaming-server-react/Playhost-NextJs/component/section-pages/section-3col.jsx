import React from 'react';
import Link from 'next/link';

const Sectioncol = () => {
    return(
        <div className="container">
            <div className="row">

                <div className="col-lg-4 col-md-6 mb-sm-30">
                    <h3>Server Near You</h3>
                        <p>Duis aliqua ex nostrud eiusmod esse esse reprehenderit non esse elit dolore sed qui cupidatat magna occaecat officia ut exercitation eu sed est elit id commodo.</p>
                        <Link className="btn-line lg-w-50" href="#">Choose a Server</Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-sm-30">
                    <h3>Affiliates Program</h3>
                        <p>Duis aliqua ex nostrud eiusmod esse esse reprehenderit non esse elit dolore sed qui cupidatat magna occaecat officia ut exercitation eu sed est elit id commodo.</p>
                        <Link className="btn-line lg-w-50" href="#">Become an Affiliate</Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-sm-30">
                    <h3>Need Support?</h3>
                        <p>Duis aliqua ex nostrud eiusmod esse esse reprehenderit non esse elit dolore sed qui cupidatat magna occaecat officia ut exercitation eu sed est elit id commodo.</p>
                        <Link className="btn-line lg-w-50" href="#">Contact Support</Link>
                </div>
            </div>
        </div>
    );
}

export default Sectioncol;
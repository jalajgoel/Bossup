import React from 'react';
import { Wave } from '../Wave';

export const Banner = props => {
    return (
        <div className="hero-section">
            <Wave/>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 hero-text-image">
                        <div className="row">
                            <div className="col-lg-7 text-center text-lg-left">
                            <h1 dataaos="fade-right">Connecting And Helping</h1>
                            <p className="mb-5" dataaos="fade-right" dataaosdelay="100">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.</p>
                            <p dataaos="fade-right" dataaosdelay="200" dataaosoffset="-500"><a href="#"
                                className="btn btn-outline-white"> Join </a></p>
                            </div>
                            <div className="col-lg-5 iphone-wrap">
                            <img src={require("../../../utils/images/phone_1.png")} alt="Image" className="phone-1" dataaos="fade-right"/>
                            <img src={require("../../../utils/images/phone_2.png")} alt="Image" className="phone-2" dataaos="fade-right" dataaosdelay="200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
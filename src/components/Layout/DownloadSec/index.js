import React from 'react';

export const DownloadSec = props => {
    return (
        <div className="site-section pb-0">
            <div className="container">
                <div className="row align-items-center p">
                    <div className="col-md-6 aos-init aos-animate" dataaos="fade-left">
                        <img src={require("../../../utils/images/girls.png")} alt="Image" className="img-fluid" style={{width: '100%'}}/>
                    </div>
                    <div className="col-md-6 mr-auto"  style={{height: '400px', boxShadow: '5px 6px 14px 10px #ccc', padding: '10px', background: 'white', marginLeft: '-10px'}}>
                        <h2 className="mb-4" style={{textAlign: 'center', marginTop: '50px'}}>Seamlessly Communicate</h2>
                        <p className="mb-4" style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
                        laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
                        dolore mollitia esse natus beatae.</p>
                        <p style={{textAlign: 'center'}}><a href="#">Download Now</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
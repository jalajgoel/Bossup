import React from 'react';

export const CardSec = ({heading, text}) => {
    return (
        <div className="col-xs-12 col-md-4">
            <div className="card">
                <img src={require("../../../utils/images/blog-1.png")}/>
                <div className="card-body">
                    <h5 className="card-title">{heading}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <button className="btn btn-primary">READ MORE</button>
            </div>
        </div>
    )
}
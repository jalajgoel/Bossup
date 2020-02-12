import React from 'react';

export const SectionHeading = ({heading}) => {
    return (
        <div className="row justify-content-center text-center mb-5">
            <div className="col-md-5" dataaos="fade-up">
              <h2 className="section-heading">{heading}</h2>
            </div>
        </div>
    )
}
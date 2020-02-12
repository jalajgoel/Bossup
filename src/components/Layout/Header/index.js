import React from 'react';

export const Header = props => {
    return (
        <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

            <div className="container">
                <div className="row align-items-center">

                <div className="col-6 col-lg-2">
                    <h1 className="mb-0 site-logo"><a href="#" className="mb-0">BOSSUP</a></h1>
                </div>

                <div className="col-12 col-md-10 d-none d-lg-block">
                    <nav className="site-navigation position-relative text-right" role="navigation">

                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                        <li className="active"><a href="#" className="nav-link">Media</a></li>
                        <li><a href="#" className="nav-link">Network</a></li>
                        <li><a href="#" className="nav-link">Forum</a></li>
                        <li><a href="#" className="nav-link">App</a></li>


                        <li>
                        <a href="#" className="nav-link">About</a>
                        </li>
                        <li><a href="#" className="nav-link" style={{background:'#34A2BE', padding: '10px 20px 10px 20px', borderRadius: '20px', border: '1px solid #34A2BE'}}>Join</a></li>
                    </ul>
                    </nav>
                </div>


                <div className="col-6 d-inline-block d-lg-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}>

                    <a href="#" className="burger site-menu-toggle js-menu-toggle" data-toggle="collapse"
                    data-target="#main-navbar">
                    <span></span>
                    </a>
                </div>

                </div>
            </div>

        </header>
    )
}
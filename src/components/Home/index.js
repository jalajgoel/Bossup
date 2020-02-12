import React, { Component } from 'react'
import './home.css';
import { Banner } from '../Layout/Banner';
import { Header } from '../Layout/Header';
import { Main } from '../Layout/Main';

class Home extends Component {

    render() {
        return (
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                        <span className="icofont-close js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <Header/>
                <main id="main">
                    <Banner/>
                </main>
                <Main/>
            </div>
        )
    }
}

export default Home
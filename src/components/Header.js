
import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
                <header className="header">
                        <nav className="nav">
                            <h1 className="header-title">
                                <a href="/">
                                 donny cheng 
                                <span>front end developer</span>
                                </a>
                            </h1>

                            <div className="nav-item">
                                <a href="/" className="active">
                                    <span className="nav-item-copy nav-item-copy--base">work</span>
                                    <span className="nav-item-copy nav-item-copy--clone">work</span>
                                </a>
                            </div>

                            <div className="nav-item">
                                <a href="lab">
                                <span className="nav-item-copy nav-item-copy--base">lab</span>
                                <span className="nav-item-copy nav-item-copy--clone">lab</span>
                                </a>
                            </div>

                            <div className="nav-item">
                                <a href="about">
                                    <span className="nav-item-copy nav-item-copy--base">about</span>
                                    <span className="nav-item-copy nav-item-copy--clone">about</span>
                                </a>
                            </div>
                        </nav>

                        <h1 className="mobile-header-title">
                            <a href="/">Donny Cheng</a>
                        </h1>

                        <div className="mobile-nav-trigger">
                            <div className="mobile-nav-copy">
                                <span className="mobile-nav-menu">menu</span>
                                <span className="mobile-nav-close">close</span>
                            </div>

                            <div className="mobile-nav-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="mobile-nav">
                            <div>
                                <div className="mobile-nav-item">
                                    <a href="/" className="active">
                                        <span>Work</span>
                                    </a>
                                </div>

                                <div className="mobile-nav-item">
                                    <a href="lab"><span>Lab</span></a>
                                </div>

                                <div className="mobile-nav-item">
                                    <a href="about"><span>About</span></a>
                                </div>
                            </div>

                            <div className="mobile-nav-bgs">
                                <div className="mobile-nav-bg"></div>
                                <div className="mobile-nav-bg"></div>
                                <div className="mobile-nav-bg"></div>
                                <div className="mobile-nav-bg"></div>
                                <div className="mobile-nav-bg"></div>
                                <div className="mobile-nav-bg"></div>
                            </div>
                        </div>
                    </header>
        )
     }

}
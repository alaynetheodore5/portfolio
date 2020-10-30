import React from 'react';

const Header = props => {

    
    
    return (
        <div>
            <header id="header" className="fixed-top  d-flex justify-content-center align-items-center header-transparent">

            <nav className="nav-menu d-none d-lg-block">
            <ul>
                <li className="active"><a href="#header" id="navhome">Home</a></li>
                <li><a href="#about" id="navabout">About</a></li>
                {/* <li><a href="#resume">Resume</a></li>
                <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio" id="navportfolio">Portfolio</a></li>
                <li><a href="#contact" id="navcontact">Contact</a></li>

            </ul>
            </nav>

            </header>

            {/* <!-- ======= Landing Picture Section ======= --> */}
            <section id="hero">
            <div className="hero-container">
            <h1>Alayne Theodore</h1>
            <h2>Hi, I'm a Software Developer In Chicago</h2>
            {/* <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down">&10035;</i></a> */}
            <a href="#about" className="btn-scroll scrollto" title="Scroll Down">&nabla;</a>
            </div>
            </section>

        </div>

    )
}

export default Header;
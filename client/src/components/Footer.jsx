import React from 'react';

const Footer = props => {

    
    
    return (
        <div>
            <footer id="footer">
                <div className="container">
                <h3>Alayne Theodore</h3>
                {/* <p>tagline?.</p> */}
                <div className="social-links">
                    <a href="https://github.com/alaynetheodore5" className="github"> </a>
                    <a href="mailto:alayne.theodore5@gmail.com" className="gmail"> </a>
                    <a href="https://www.linkedin.com/in/astheodore/" className="linkedin"> </a>
                </div>
                <div className="copyright">
                    &copy; Copyright <u><span><a href="/home">Alayne</a></span></u>. All Rights Reserved
                </div>
                </div>
            </footer>

            {/* <a href="#" className="back-to-top">Back to top</a> */}
        </div>

    )
}

export default Footer;
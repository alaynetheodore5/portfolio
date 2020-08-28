import React from 'react';

const Main = props => {

    
    
    return (
        <div id="main">
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About Me</h2>
                    </div>

                <div className="row">
                    <div className="col-lg-6">
                        <p className="mt-5">
                            I'm a software developer based in Chicago, IL. I have a passion for web design and love to create web applications. I worked as an IT Recruiter at a great company for 3 years and decided instead of just talking about web apps, I wanted to build them! This led me to carry on my education and training into programming. 
                        </p>
                        <p> 
                            Quickly, I realized my passion for technology, continuous learning and my somewhat picky attention to detail. Outside of work, I'm a travel-fanatic (check out my contact section for a picture of me riding a camel to the Great Pyramids of Giza in Egypt) and lover of trying new things. 
                        </p>
                    </div>
                    {/* <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div> */}
                    <div className="col-lg-6 d-flex flex-column align-items-stretch">
                        <div className="content pl-lg-4 d-flex flex-column justify-content-center">
                            <div className="skills-content pl-lg-4">
                                {/* <div className="progress">
                                    <span className="skill">HTML <i className="val">85%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{width: 425}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" ></div>
                                    </div>
                                </div> */}
                                <div className="progress">
                                    <span className="skill">HTML/CSS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{width: 450}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" id="progress"></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{width: 375}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">C# <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{width: 375}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">React <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{width: 375}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <h2>What I Do</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle designimg" width="120" height="120" src="./Images/design.png" alt="design" />
                        <h2>Design</h2>
                        <p>Keeping it simple. Centered on content and functionality.</p>
                    </div>
                    <div className="col-lg-4">
                    <img className="rounded-circle devimg" width="120" height="120" src="./Images/dev.png" alt="development" />
                        <h2>Development</h2>
                        <p>My goals are to focus on clean code and newest technologies.</p>
                    </div>
                    <div className="col-lg-4">
                    <img className="rounded-circle psolveimg" width="120" height="120" src="./Images/psolve.png" alt="problem-solving"/>
                        <h2>Problem Solving</h2>
                        <p>Creative approach to research, analysis and decision making.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <a href="#" className="back-to-top"><i className="icofont-simple-up">Top</i></a> */}
    </div>
    )
}

export default Main;
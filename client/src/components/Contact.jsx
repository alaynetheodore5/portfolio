import React from 'react';

const Contact = props => {


    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Me</h2>
                    </div>
                        <div className="row">
                            <div className="col-md-6 ">
                            <div className="info-box">
                                <img src="./Images/me-egypt.png" className="ml-5 rounded" width="400" height="520" alt="Alayne in Egypt"/>
                            </div>
                            </div>
                            <div className="col-md-6 rounded contactme text-center">
                            <div className="info-box ml-6">
                                <div className="getintouch">
                                    <h1 className="mt-1 pb-5 pt-5">get in touch</h1>
                                </div>
                                <h3>E M A I L</h3>
                                <a href="mailto:alayne.theodore5@gmail.com"><u>alayne.theodore5@gmail.com</u></a>
                                <h3>G I T H U B</h3>
                                <a href="https://github.com/alaynetheodore5"><u>github.com/alaynetheodore5</u></a>
                                <h3>L I N K E D I N</h3>
                                <a href="https://www.linkedin.com/in/astheodore/"><u>linkedin.com/in/astheodore</u></a>
                            </div>
                            </div>
                        {/* <div className="col-lg-6">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="form-row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validate"></div>
                            </div>
                            <div className="form-group">
                            <textarea className="form-control" name="message" rows="6" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
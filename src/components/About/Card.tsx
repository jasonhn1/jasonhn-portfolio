import React, { useRef } from "react";
import './About.css'; // Import the CSS file
import profile from "../img/profile.jpg";


export default function Landing() {
    const openResumeInNewTab = () => {
        const resumeUrl = process.env.PUBLIC_URL + '/Jason_Huy_Nguyen_Resume.pdf';
        window.open(resumeUrl, '_blank');
      };
  return (

   <>
   <section className="section about-section gray-bg" id="card">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">On The Job Hunt</h6>
                            <p className="intro">My passion for programming lies within software design, web development, cloud computing and databases. After finishing my internship at Verizon, I am eager to learn more and gain more valuable experiences while expanding my reach in tech.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Location</label>
                                        <p>Sacramento CA</p>
                                    </div>
                                    <div className="media">
                                        <label>Age</label>
                                        <p>23</p>
                                    </div>
                                    <div className="media">
                                        <label>Major</label>
                                        <p>Computer Science</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="media">
                                        <label>School</label>
                                        <p>UC Irvine</p>
                                    </div>

                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>jasonnguyen8830@gmail.com</p>
                                    </div>

                                    <div className="media">
                                        <label>LinkedIn</label>
                                        <p><a target="_blank" href="https://www.linkedin.com/in/jasonhn1/">linkedin.com/in/jasonhn1/</a></p>
                                    </div>
                                    <div className="media">
                                        <label>Work</label>
                                       <p><button className="resume-btn" onClick={openResumeInNewTab}>Jason H Nguyen Resume</button></p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={profile} id="profile" alt="Jason Nguyen Profile Pic"/>
                        </div>
                    </div>
                </div>
                {/* <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
   </>
  );
}
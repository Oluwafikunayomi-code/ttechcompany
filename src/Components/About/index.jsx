import React from 'react'
import "./About.css"
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="column">
                    <h3 className="sub__title">Trusted Solar Experts With 10+ Years of Experience</h3>
                    <h1 className='sub__title'>
                        Turning your <span className='g-text'>vision</span> into
                        reality by focusing on the basics.
                    </h1>
                    <p className="text__muted description">
                        For over a decade, we've helped homeowners and businesses transition to 
                        smarter, cleaner, and more reliable energy solutions.
                        Our team is dedicated to delivering high-quality solar installations that combine
                        performance, durability, and modern innovation to meet client's needs.
                        Our mission is to empower communities with sustainable energy solutions that reduce cost, 
                        increase energy independence, and create a greener future for generations to come.
                    </p>
                    <div className="group">
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="detail">
                                <p className="text__muted">Consultation</p>
                                <h3>Affordable</h3>
                            </div>
                        </div>
                        {/* End row */}
                        

                         {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="detail">
                                <p className="text__muted">Expert</p>
                                <h3>Workmanship</h3>
                            </div>
                        </div>
                        {/* End row */}

                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="detail">
                                <p className="text__muted">Customer</p>
                                <h3>Support</h3>
                            </div>
                        </div>
                        {/* End row */}

                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="detail">
                                <p className="text__muted">Quality</p>
                                <h3>Service</h3>
                            </div>
                        </div>
                        {/* End row */}
                    </div>{/* End group */}

                    <div className="buttons__container">
                        <Link to='project' smooth="linear" duration={320} className='btn'>Explore</Link>
                        <Link to='contact' smooth="linear" duration={320} className='btn btn__primary'>Get a quote</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
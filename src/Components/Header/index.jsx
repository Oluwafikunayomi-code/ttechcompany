import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'
import bgVideo from '../../assets/Background-video.mp4'

const Header = () => {
    return (
        <header id='header'>
            <video
                className="header__bg-video"
                src={bgVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            />
            <div className="container full__height blur-effect">
                <div className="column">
                    <h1 className="title">
                        Power Your Home With <br/>
                        <span className="g-text">Clean Reliable Energy</span>
                    </h1>
                    <p className="text__muted">
                        Transform the way you power your home with advanced solar solutions designed for efficiency, savings, and long-term performance. From reducing electricity costs to providing dependable backup power during outages, our customized solar systems help homeowners take control of their energy future with confidence.
                    </p>
                    <div className="buttons__container">
                        <Link to='services' className='btn' smooth="linear" duration={320}>Our Services</Link>
                        <Link to='contact' className='btn btn__primary' smooth="linear" duration={320}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
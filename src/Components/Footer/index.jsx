import React from 'react'
import "./Footer.css"
import { footer } from '../../data'
import { Link } from 'react-scroll'
import Logo from '../Navbar/Logo'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    {
                        footer.map((list,index) =>(
                            <div className="column" key={index}>
                                <h3 className="routes__name">{list.name}</h3>
                                <div className="routes__container">
                                    {
                                        list.routes.map((route,i)=>(
                                            <Link to={route.id||"#"} className='route__item' key={i}>
                                                <p className="name">{route.name}</p>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className="column">
                        <Logo/>
                        <div className="newsletter">
                            <img src="/icon.png" alt="Company-logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <h3>&copy; {new Date().getFullYear()} <span className='g-text'>ttechelectrical</span>. All rights reserved.</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer
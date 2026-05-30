import React from 'react'
import "./Logo.css"
import { MdOutlineSolarPower } from "react-icons/md";

const Logo = () => {
    return (
        <div className='logo'>
            <MdOutlineSolarPower  className='icon'/>
            <h1 className="name">ttech<span className="color__primary">Electrical</span></h1>
        </div>
    )
}

export default Logo
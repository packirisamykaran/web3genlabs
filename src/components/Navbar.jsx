import React from 'react'
import { IoReorderTwoSharp } from "react-icons/io5"


export default function Navbar() {
    return (
        <div className="navbar" id='navbar'>
            {/* <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Team</a>
            <a href="#">Contact Us</a> */}
            {/* <IoReorderTwoSharp className='hamburg' /> */}
            <a href="#navbar" ><img className='logo' src={require('./asset/headerLogo1.png')} alt="" /></a>
        </div>
    )
}

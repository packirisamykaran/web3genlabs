import React from 'react'
import Navbar from "./Navbar"
import "../style/Hero.css"
import "../style/Navbar.css"

export default function Hero() {
    return (
        <div className="hero">
            <Navbar />
            <video
                id="animation"
                muted="muted"
                autoPlay
                loop
                playsInline
                preload="metadata">
                <source
                    src={require("./asset/Website assets/Renderw3g.mp4")}
                    type="video/mp4"
                />
            </video>
            <div className="heading">
                grow your business with <div className="gradient">nfts</div>
            </div>
            <div className="body">
                {/* If you're a business owner wanting to adopt NFTs because you've witnessed the growth of other brands that have adopted it, we make that process easier for you */}
                We make the process of integrating NFTs easier for brands
            </div>
            <div className="wrapper">
                <a className='link' href="#roadmap">Here's How</a>
            </div>



        </div>
    )
}

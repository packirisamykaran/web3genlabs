import React from 'react'
import "../style/About.css"

export default function About() {
    return (

        <div className="about" id='about'>
            <div className="container">
                <div className="section">
                    <h1 className='gradient'>Why Web3 Gen labs?</h1>
                    <p>We value building long-term relationships and maximizing your brands potential over maximizing profits
                    </p>
                </div>
                <div className="section-icon">
                    <div className="item">
                        <div className="section">
                            <h1 className='gradient'>Development</h1>
                            <p>Custom websites, Smart Contracts tailored to your needs
                            </p>
                        </div>
                        <img src={require("./asset/Website assets/c8 1.png")} alt="" className="icon" />
                    </div>
                    <div className="item">
                        <div className="section">
                            <h1 className='gradient'>brand building</h1>
                            <p>Social Media Marketing, Copywriting, Collaborations, PR to grow your brands presence
                            </p>
                        </div>
                        <img src={require("./asset/Website assets/c5 1.png")} alt="" className="icon" />
                    </div>
                    <div className="item">
                        <div className="section">
                            <h1 className='gradient'>chain agnostic</h1>
                            <p>Have a preferred chain to work on? We will get it done!
                            </p>
                        </div>
                        <img src={require("./asset/Website assets/c3 1.png")} alt="" className="icon" />
                    </div>
                    <div className="item">
                        <div className="section">
                            <h1 className='gradient'>artwork + design</h1>
                            <p>NFT art and UI/UX design catered to your Vision
                            </p>
                        </div>
                        <img src={require("./asset/Website assets/c7 1.png")} alt="" className="icon" />
                    </div>
                    <div className="item">
                        <div className="section">
                            <h1 className='gradient'>management</h1>
                            <p>Community Management, Social Media management to grow your brands engagement
                            </p>
                        </div>
                        <img src={require("./asset/Website assets/c1 1.png")} alt="" className="icon" />
                    </div>

                </div>
            </div>
        </div>
    )
}

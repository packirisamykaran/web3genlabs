import "../style/Contact.css"

import React from 'react'
import { HiDevicePhoneMobile } from "react-icons/hi2"
import { HiOutlineMail } from "react-icons/hi"

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-info">
                    <div className="heading">
                        Contact Us
                    </div>
                    <div className="info-container">
                        <div className="icon-info">
                            <HiDevicePhoneMobile className="icon" />
                            <div className="info">97271435</div>
                        </div>
                        <div className="icon-info">
                            <HiOutlineMail className="icon" />
                            <a href="/" className="info">gm@web3genlabs.xyz</a>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="heading">
                        Send us your enquiry
                    </div>
                    <form
                        action="https://formspree.io/f/mrgdngjq"
                        method="POST"
                    >
                        <div className="form">


                            <input required type="text" name="name" placeholder="Name" />
                            <input required type="email" name="email" placeholder="Email" />
                            <input required type="text" name="company" placeholder="Company" />


                            <textarea required placeholder="Enquiry" name="message"></textarea>


                            <div className="wrapper">
                                <button type="submit">Send</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

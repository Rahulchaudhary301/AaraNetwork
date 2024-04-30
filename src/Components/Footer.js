import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <div className="footerBody">
                <div className="footerContainer">
                    <div className="footersection1">
                        <h1>Arra NetWork</h1>
                        <hr/>
                        <p>Arra Network specializes in providing custom IT solutions for every business.</p>
                        <button>ABOUT US</button>
                    </div>


                    <div className="footersection2">
                        <h1>Newsletter</h1>
                        <hr/>
                        <input placeholder='Your Email Address'></input>
                        <button className='subscribe'> Subscribe</button>
                    </div>


                    <div className="footersection3">
                        <h1>Official info :</h1>
                        <hr/>
                        <div className="telDIv">
                            <IoCall className='call'/>
                            <p>+91 9741510789</p>
                        </div>
                         
                        <div className="telDIv">
                            <IoCall className='call' />
                            <p>+91 9741510789</p>
                        </div>
                         
                        <div className="telDIv">
                            <FaLocationDot className='locatonIcon' />
                            <p>No. 18, S.R. Building, 5 'A' Cross, M V Extenstion, Hoskote, Bengaluru, Karnataka - 562114</p>
                        </div>

                        <div className="telDIv">
                            <FaLocationDot className='locatonIcon' />
                            <p>No. 18, S.R. Building, 5 'A' Cross, M V Extenstion, Hoskote, Bengaluru, Karnataka - 562114</p>
                        </div>
                        
                    </div>




                    <div className="footersection4">
                        <h1>Follow us</h1>
                        <hr/>

                        <div className="socialIcon">
                            <MdEmail className='rotateIcon'/>
                            <BsTwitterX className='rotateIcon'/>
                            <FaLinkedin className='rotateIcon'/>
                            <FaSquareInstagram className='rotateIcon'/>
                            <FaFacebookSquare className='rotateIcon'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

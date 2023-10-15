import React from 'react';
import footerLogo from "../../assets/img/Logo_small.png"
import {FiInstagram} from "react-icons/fi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"
import footerLince from "../../assets/img/image 8.png"
const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
            <div className='footer--line'></div>

                <div className='footer'>
                    <div className='footer--info'>
                        <img src={footerLogo} alt=''/>
                        <div className='footer--info__links'>
                            <p>Home</p>
                            <p>Land sale</p>
                            <p>Faq</p>
                            <p>Blog</p>
                        </div>
                        <div>
                            <div className='footer--info__dop'>
                                <p>Privacy policy</p>
                                <p>whitepaper</p>
                            </div>
                            <div className='footer--info__logos'>
                                <img src={footerLince} alt=''/>
                                <p><AiOutlineTwitter className='footer-logo'/></p>
                                <p><FiInstagram className='footer-logo'/></p>
                                <p><BsDiscord className='footer-logo'/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
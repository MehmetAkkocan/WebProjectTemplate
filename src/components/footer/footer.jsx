import React from 'react';
import './footer.css';
import url from '../../assets/url.json';
import { RiTwitterFill, RiDiscordFill, RiGoogleFill } from 'react-icons/ri';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-copyright">
                <div className="footer-copyright_social">
                    <RiGoogleFill className='Team-logo' onClick={() => window.open(url.links.google, '_blank', 'noopener,noreferrer')}></RiGoogleFill>
                    <RiTwitterFill className='Team-logo' onClick={() => window.open(url.links.twitter, '_blank', 'noopener,noreferrer')}></RiTwitterFill>
                    <RiDiscordFill className='Team-logo' onClick={() => window.open(url.links.discord, '_blank', 'noopener,noreferrer')}></RiDiscordFill>
                </div>
                <p>Ginn ©2022 All rights reserved</p>
                <p>Powered By Ginn
                </p>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import './link3.css';
// import video2 from '../../assets/video2.mp4'
import img from './../../assets/title2.png'
import url from "../../assets/url.json";

const Link3 = () => {
    return (
        <div className='link3' id='link3'>
            <h3>Link3</h3>
            <div className="link3-holder">
                {/* <video autoPlay loop muted>
                <source src={video2} type='video/mp4' /> 
                </video>*/}
                {/* TODO : video content! no need img */}
                <img src={img} width='100%' style={{zIndex: '-1' }} alt="" />

                <div className="link3-buttons">
                    <button onClick={() => window.open(url.links.google, '_blank', 'noopener,noreferrer')}>Button</button>
                    <button onClick={() => window.open(url.links.discord, '_blank', 'noopener,noreferrer')}>Button</button>
                    <button onClick={() => window.open(url.links.youtube, '_blank', 'noopener,noreferrer')}>Button</button>
                    <button onClick={() => window.open(url.links.google, '_blank', 'noopener,noreferrer')}>Button</button>
                </div>
            </div>

        </div>
    )
}
export default Link3 
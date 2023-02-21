import React from 'react';
import './home.css';
// import video from './../../assets/video.mp4'
import img from './../../assets/bg.jpg'

const Home = () => {
    return (
        <div className='home' id='home'>
            {/* <video autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video> */}
            {/* TODO : video content! no need img */}
            <img src={img} width='100%' style={{position: 'absolute', zIndex: '-1'}} alt="" />

           
            <div className='home-content'>
                <div className='home-content_text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolorem, ea perspiciatis nisi nemo cum molestiae exercitationem unde ad quod expedita error fuga doloremque quam amet excepturi velit, dolorum at!
                        </p>
                    <br />
                    <br />
                </div>
                <div className='home-button'>
                    <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                        Button
                    </a>
                </div>
            </div>
            <div className="home-free_area"></div>
        </div>
    )
}

export default Home

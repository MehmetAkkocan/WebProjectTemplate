import React from 'react';
import './gallery.css';
import gallery1 from '../../assets/galleryy/gallery1.png';
import gallery2 from '../../assets/galleryy/gallery2.png';
import gallery3 from '../../assets/galleryy/gallery3.png';
import gallery4 from '../../assets/galleryy/gallery4.png';
import gallery5 from '../../assets/galleryy/gallery5.png';
import gallery6 from '../../assets/galleryy/gallery6.png';

const Gallery = () => {
    return (
        <div className='gallery' id='gallery'>
            <h3>Gallery</h3>
            <div className="gallery-area">
                <div className="gallery-area_left">
                    <div className="gallery-column">
                        <div><img src={gallery1} alt="" /></div>
                        <div><img src={gallery4} alt="" /></div>
                        
                    </div>
                    <div className="gallery-row">
                      <div> <img src={gallery5} alt="" /></div> 
                    </div>
                </div>
                <div className="gallery-area_right">
                    <div className="gallery-row">
                        <div><img src={gallery6} alt="" /></div>
                    </div>
                    <div className="gallery-column">
                        <div><img src={gallery2} alt="" /></div>
                        <div><img src={gallery3} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="gallery-show">
                <a href="/gallery">SHOW MORE</a>
            </div>
        </div>
    )

}

export default Gallery
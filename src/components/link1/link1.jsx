import React from 'react';
import './link1.css';
import glider1 from '../../assets/png1.png';
import glider2 from '../../assets/png2.png';

const Link1 = () => {
    return (
        <div className='link1' id='link1'>
            <div className="link1-left">
                <div className="link1-left_img">
                    <img src={glider1} alt='' />
                </div>
                <div className="link1-left_text">
                    <h3>Heading</h3>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus magni placeat blanditiis rem ea reiciendis libero ipsam voluptate minus quam quas iusto molestiae repellat explicabo, soluta nihil, officia obcaecati.
                    </p>
                </div>

            </div>
            <div className="link1-right">
                <div className="link1-right_img">
                    <img src={glider2} alt='' />
                </div>
                <div className="link1-right_text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque amet dolore eius officia cum quidem assumenda, nobis tenetur pariatur minus ex in, a quas. Nemo labore nam deserunt odio?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Link1

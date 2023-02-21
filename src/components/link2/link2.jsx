import React, { useState } from 'react';
import './link2.css';
import { Details } from './link2details';
import map0 from '../../assets/title1.png';
import map1 from '../../assets/title2.png';
import map2 from '../../assets/title3.png';

const Link2 = () => {
    const [active, setActive] = useState("map0");

    return (
        <div className='link2 section__padding' id='link2'>
            <h3>
                Link2
            </h3>
            <div className="link2-area">

                <div className="link2-area_title">
                    {
                        Details.map((item, i) =>
                            <div key={"k" + i} className='link2-item_title'>
                                <button className={active === ("map" + i) ? 'activeBackgroundStyle' : null} onClick={() => setActive("map" + i)}>{item.title}</button>
                            </div>
                        )
                    }
                </div>
                <div className='link2-news-area'>

                    <div>
                        {active === ("map0") ? <img src={map0} alt="" /> : <img src={map0} alt="" style={{display:'none'}}/> }
                        {active === ("map1") ? <img src={map1} alt="" /> : <img src={map1} alt="" style={{display:'none'}}/> }
                        {active === ("map2") ? <img src={map2} alt="" /> : <img src={map2} alt="" style={{display:'none'}}/> }
                    </div>
                    {/* {
                        Details.map((item, j) =>
                            <div key={"j" + j} className='link2-item_news'>

                                {
                                    item.news.map((news, l) =>

                                        <div key={"l" + l} className={'link2-item_news' + l}>
                                            {active === ("map" + j) ? <pre> {news.detail} </pre> : null}
                                        </div>
                                    )
                                }
                            </div>
                        )
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Link2

import React from 'react';
import './team.css';
import {Leaders,Teammember} from './members';
import { RiLinkedinBoxFill } from 'react-icons/ri';

const Team = () => {
    return (
        <div className='Team section__padding' id='team'>
            <div className="gradient__text"> TEAM </div>
            <div className="gradient__text2">LEADERS </div>
            <div className="Team-area">
                {
                    Leaders.map((item,i) =>
                        <div key={i} className='Team-item'>
                            <div className='Team-item_img'>
                                <img src={item.image} alt=''/>
                            </div>
                            <div className="Team-item_name">
                                <span>{item.name}</span>
                            </div>
                            <div className="Team-item_title">
                                <span>{item.title}</span>
                            </div>
                            <div className="Team-item_link">
                            <RiLinkedinBoxFill className='Team-logo' onClick={() => window.open(item.linkedin, '_blank', 'noopener,noreferrer')}></RiLinkedinBoxFill>
                            </div>
                        </div>
                    )
                }
                </div>
                <div className="gradient__text2"> Teammembers </div>
                <div className="Team-area">
                {
                    Teammember.map((item,i) =>
                        <div key={i} className='Team-item'>
                            <div className='Team-item_img'>
                                <img src={item.image} alt=''/>
                            </div>
                            <div className="Team-item_name">
                                <span>{item.name}</span>
                            </div>
                            <div className="Team-item_title">
                                <span>{item.title}</span>
                            </div>
                            <div className="Team-item_link">
                            <RiLinkedinBoxFill className='Team-logo' onClick={() => window.open(item.linkedin, '_blank', 'noopener,noreferrer')}></RiLinkedinBoxFill>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Team

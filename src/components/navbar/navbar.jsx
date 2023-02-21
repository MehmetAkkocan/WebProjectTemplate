import React, { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Logo } from '..';
import url from "../../assets/url.json";
const Menu = () => (
    <>
        <p><a href="/#home">Home</a></p>
        <p><a href="/#link1">Link1</a></p>
        <p><a href="/#link2">Link2</a></p>
        <p><a href="/#link3">Link3</a></p>
        <p><a href="/#gallery">Gallery</a></p>
        <p><a href="/#link5">Link5</a></p>
        <p><a href={url.links.google} target='_blank' rel='noreferrer noopener'>Google</a></p>
    </>
)

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('scrolled');
    }

    const [toggleMenu, setToggleMenu] = useState(false);

    let useClickOutside = (handler) => {
        let domNode = useRef();
        useEffect(() => {
            let maybeHandler = (event) => {
                if (domNode.current && !domNode.current.contains(event.target))
                    handler();
                if (!domNode.current)
                    handler();
            };

            document.addEventListener("mousedown", maybeHandler);
            return () => {
                document.removeEventListener("mousedown", maybeHandler);
            };
        });
        return domNode;
    };
    let domNode = useClickOutside(() => {
        setToggleMenu(false);
    })

    return (
        <div className={x.join(" ")}>
            <div className='navbar-links'>
                <Logo></Logo> 
                <div className='navbar-links_container'>
                    <Menu></Menu>
                </div>                 
                <div ref={domNode} className='navbar-menu'>
                    {
                        toggleMenu
                            ? <RiCloseLine className='navbar-menu-icon' onClick={() => setToggleMenu(false)} ></RiCloseLine>
                            : <RiMenu3Line className='navbar-menu-icon' onClick={() => setToggleMenu(true)} ></RiMenu3Line>
                    }
                </div>
                {
                    toggleMenu && (
                        <div className='navbar-menu_container'>
                            <div ref={domNode} className='navbar-menu_container-links'>
                                <Menu></Menu>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar

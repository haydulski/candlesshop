import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { NavContainer, Nav, Column } from './Navbar.css'
import { MenuBar } from '../../imgs/menu-icon.js'
import { Cart } from '../../imgs/cart-icon.js'
import Logo from '../../imgs/logo-icon.png'
import { Account } from '../../imgs/account-svg'
import { SearchIcon } from '../../imgs/search-icon'
import Menu from '../menu/Menu';
import { gsap } from 'gsap/all';

function Navbar() {

    const [clickedMenu, setClickedMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const t1 = gsap.timeline({ paused: true });
        t1.to('.toggle-menu', .5, {
            top: 0,
        });

        t1.from(
            ".main-menu li.first-level",
            0.5,
            { y: -100, opacity: 0, stagger: .4, delay: .4, reversed: true },
            "0.1",
            "-=0.4"
        );

        t1.reverse();
        const menuTrigger = document.querySelector('svg.menu-trigger');
        const closeTrigger = document.querySelector('svg.menu-close-trigger');

        const toggleMenuView = () => {
            t1.reversed(!t1.reversed());
        }

        menuTrigger.addEventListener("click", toggleMenuView);
        closeTrigger.addEventListener("click", toggleMenuView);

        return () => {
            menuTrigger.removeEventListener("click", toggleMenuView)
            closeTrigger.removeEventListener("click", toggleMenuView)


            t1.to('.toggle-menu', .8, {
                top: "-100vh",
            });

        }


    }, [clickedMenu])

    const handleClick = () => { setClickedMenu(!clickedMenu) }

    return (<>
        <NavContainer className="header">
            <Nav>

                <Column align="left">
                    <MenuBar className="menu-trigger" />
                </Column>
                <Column align="center">
                    <img src={Logo} alt="page-logo" />
                </Column>
                <Column align="right">
                    <SearchIcon />
                    <Account />
                    <Cart />
                </Column>

            </Nav>
        </NavContainer>
        <Menu click={handleClick} />
    </>);
}

export default Navbar;
import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavContainer, Nav, Column } from './Navbar.css'
import { MenuBar } from '../../imgs/menu-icon.js'
import { Cart } from '../../imgs/cart-icon.js'
import Logo from '../../imgs/logo-icon-small.png'
import { Account } from '../../imgs/account-svg'
import { SearchIcon } from '../../imgs/search-icon'
import Menu from '../menu/Menu'
import { gsap } from 'gsap/all'
import { connect } from 'react-redux'
import { setCart } from '../../redux/actions/shopActions'
import { fetchProductsAction } from '../../redux/actions/productActions'

function Navbar({ loaded, qty, products,
    setCart, fetchProductsAction }) {

    const [clickedMenu, setClickedMenu] = useState(false)
    const location = useLocation()
    const t1 = gsap.timeline({ paused: true })
    const menuRef = useRef(null)

    useEffect(() => {
        if (products.length < 1) {
            fetchProductsAction()
        }
    }, [fetchProductsAction])

    useEffect(() => {
        if (loaded === 'no') {
            const cartJson = localStorage.getItem('cart')
            setCart(cartJson)
        }
    }, [setCart])

    useEffect(() => {
        t1.to(menuRef.current, .5, {
            top: 0,
        });

        t1.from(
            ".main-menu li.first-level",
            0.5,
            { y: -101, opacity: 0, stagger: .4, delay: .4, reversed: true },
            "0.1",
            "-=0.4"
        );

        t1.reverse();
        const menuTrigger = document.querySelector('svg.menu-trigger')
        const closeTrigger = document.querySelector('svg.menu-close-trigger')

        const toggleMenuView = () => {
            t1.reversed(!t1.reversed())
        }


        menuTrigger.addEventListener("click", toggleMenuView)
        closeTrigger.addEventListener("click", toggleMenuView)

        return () => {
            menuTrigger.removeEventListener("click", toggleMenuView)
            closeTrigger.removeEventListener("click", toggleMenuView)


            t1.to('.toggle-menu', .8, {
                top: "-101vh",
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
                    <Link to="/"><img src={Logo} alt="page-logo" /></Link>
                </Column>
                <Column align="right">
                    <SearchIcon />
                    <Link to="/my-account"><Account /></Link>
                    <div className='cart-icon'>
                        <Link to="/cart"><Cart /></Link>
                        <span className='cart-qty'>{qty}</span>
                    </div>

                </Column>

            </Nav>
        </NavContainer>
        <Menu click={handleClick} menuref={menuRef} />
    </>);
}

export default connect(state => ({
    products: state.productsState.products,
    loaded: state.shop.cartLoading,
    qty: state.shop.cartQty
}), { fetchProductsAction, setCart })(Navbar)
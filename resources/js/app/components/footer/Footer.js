import React from 'react';
import { Container, Row } from './Footer.css'
import Logo from '../../imgs/logo-icon.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Container>
            <Row>
                <div className="logo">
                    <img src={Logo} alt="footer-logo" />
                </div>
                <div className="links">
                    <h5>Menu</h5>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Cart</p>
                    <p>Account</p>
                    <p>Contact</p>
                </div>
                <div className="links">
                    <h5>Products</h5>
                    <p><Link to="/category/woody-category">Woody</Link></p>
                    <p><Link to="/category/floral-category">Floral</Link></p>
                    <p><Link to="/category/fresh-category">Fresh</Link></p>
                    <p><Link to="/category/oriental-category">Oriental</Link></p>
                </div>
                <div className="links">
                    <h5>Check socials</h5>
                </div>
            </Row>

        </Container>
    );
}

export default Footer;
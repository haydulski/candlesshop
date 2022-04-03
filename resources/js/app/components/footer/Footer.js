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
                    <p><Link to="/products/woody">Woody</Link></p>
                    <p>Floral</p>
                    <p>Fresh</p>
                    <p>Oriental</p>
                </div>
                <div className="links">
                    <h5>Check socials</h5>
                </div>
            </Row>

        </Container>
    );
}

export default Footer;
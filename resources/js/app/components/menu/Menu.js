import React from 'react';
import { MenuContainer, Row } from './Menu.css'
import CloseBtn from '../../imgs/close-btn'
import { Link } from 'react-router-dom'

function Menu({ click, menuref }) {


    return (
        <MenuContainer className="toggle-menu" ref={menuref}>
            <Row>
                <div className="column">
                    <CloseBtn />
                    <ul className="main-menu">
                        <li onClick={click} className='first-level'><Link to="/">Home</Link>
                        </li>
                        <li className='first-level'>Shop
                            <ul className="submenu">
                                <li onClick={click} className='second-level'><Link to="/shop">All products</Link></li>
                                <li onClick={click} className='second-level'><Link to="/category/woody-category">Woody</Link></li>
                                <li onClick={click} className='second-level'><Link to="/category/floral-category">Floral</Link></li>
                                <li onClick={click} className='second-level'><Link to="/category/fresh-category">Fresh</Link></li>
                                <li onClick={click} className='second-level'><Link to="/category/oriental-category">Oriental</Link></li>
                            </ul>
                        </li>
                        <li className='first-level'><a href="#">Rest</a>
                            <ul className="submenu">
                                <li className='second-level'>Blog</li>
                                <li className='second-level'>Contact</li>
                                <li className='second-level'>F.A.Q.</li>
                                <li className='second-level'>Our team</li>
                                <li className='second-level'>Privacy Policy</li>

                            </ul></li>
                    </ul>
                </div>
                <div className="column"></div>
            </Row>
        </MenuContainer>
    );
}

export default Menu;
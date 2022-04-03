import React from 'react';
import { Container, Row } from './Section3.css'
import ProductsGrid from '../../components/products-grid/ProductsGrid';

function Section3() {
    return (
        <Container className='slide slide2'>
            <Row><h2>Best<br />sellers</h2></Row>
            <Row>
                <ProductsGrid width="33%" color='orange' />
            </Row>
        </Container>
    );
}

export default Section3;
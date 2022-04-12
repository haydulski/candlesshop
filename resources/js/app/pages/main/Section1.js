import React from 'react';
import { Container, Row } from './Section1.css'
import ProductsGrid from '../../components/products-grid/ProductsGrid';

function Section1() {
    return (
        <Container >
            <Row><h2>Newest<br />products</h2></Row>
            <Row>
                <ProductsGrid width="33%" color='green' mode='newest' limit='3' />
            </Row>
        </Container>
    );
}

export default Section1;
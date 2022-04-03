import React from 'react';
import { Container, Product } from './ProductsGrid.css'
import ProdImg from '../../imgs/product.jpg'

function ProductsGrid({ width, color }) {
    return (
        <Container>
            <Product width={width} color={color}>
                <img src={ProdImg} alt="product img" />
                <p className="title">Product random name</p>
                <p className="price">$40</p>
            </Product>
            <Product width={width} color={color}>
                <img src={ProdImg} alt="product img" />
                <p className="title">Product random name</p>
                <p className="price">$40</p>
            </Product>
            <Product width={width} color={color}>
                <img src={ProdImg} alt="product img" />
                <p className="title">Product random name</p>
                <p className="price">$40</p>
            </Product>
        </Container>
    );
}

export default ProductsGrid;
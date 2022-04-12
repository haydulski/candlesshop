import React, { useEffect, useState } from 'react'
import {
    useParams
} from "react-router-dom"
import { connect } from 'react-redux'
import { fetchProductsAction } from '../../redux/actions/productActions'
import { Container, Description } from './SingleProduct.css'

function SingleProduct({ products, fetchProductsAction }) {
    let { slug } = useParams()
    let search = products.find((el) => el.slug === slug)
    const [product, setProduct] = useState(search)


    useEffect(() => {
        if (products.length < 1) {
            fetchProductsAction()
        }
    }, [fetchProductsAction])

    useEffect(() => {
        search = products.find((el) => el.slug === slug)
        setProduct(search)

    }, [products])

    return product === null || product === undefined ?
        (<>Ładowanie...</>)
        : (

            <Container>
                <div className="main-img"><img src={'/storage/' + product.picture} alt="Picture of product" /></div>
                <div className='product-details'>
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>
                    <p>Available: {product.stock_qty}</p>
                    <p>Quantity</p>
                    <button className='btn btn-secondary'>Add to cart</button>
                    <Description>
                        {product.description}
                    </Description>
                </div>
            </Container>


        );
}

export default connect(state => ({
    products: state.productsState.products
}), { fetchProductsAction })(SingleProduct)
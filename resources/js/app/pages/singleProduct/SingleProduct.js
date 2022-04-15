import React, { useEffect, useState } from 'react'
import {
    useParams
} from "react-router-dom"
import { connect } from 'react-redux'
import { addProductToCart } from '../../redux/actions/shopActions'
import { Container, Description, CounterInput } from './SingleProduct.css'

function SingleProduct({ products, cart,
    addProductToCart }) {

    let { slug } = useParams()
    let search = products.find((el) => el.slug === slug)
    const [product, setProduct] = useState(search)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        search = products.find((el) => el.slug === slug)
        setProduct(search)

    }, [products])

    const handleCart = () => {
        const prod = {
            id: product.id,
            title: product.title,
            price: product.price,
            photo: product.picture,
            qty: counter,
        }
        addProductToCart(cart, prod)
    }

    return product === null || product === undefined ?
        (<>Ładowanie...</>)
        : (

            <Container>
                <div className="main-img"><img src={'/storage/' + product.picture} alt="Picture of product" /></div>
                <div className='product-details'>
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>
                    <p>Available: {product.stock_qty}</p>
                    <CounterInput>
                        <div className="minus" onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}>-</div>
                        <input type="number" name="order_qty" step="1" min="1" max="10" id="order_qty" value={counter} readOnly />
                        <div className="plus" onClick={() => setCounter(counter < 10 ? counter + 1 : 10)}>+</div>
                    </CounterInput>
                    <button className='btn btn-secondary' onClick={handleCart}>Add to cart</button>
                    <Description>
                        {product.description}
                    </Description>
                </div>
            </Container>


        );
}

export default connect(state => ({
    products: state.productsState.products,
    cart: state.shop.cart
}), { addProductToCart })(SingleProduct)
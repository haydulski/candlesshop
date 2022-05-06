import React, { useEffect } from 'react'
import { Container, Product } from './ProductsGrid.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Loader from '../loader/Loader'

function ProductsGrid({ width, color, mode, products, limit, catName }) {

    useEffect(() => { }, [products])
    const filterByDateProducts = () => {
        let filtered = products
        filtered.sort(function compare(a, b) {
            const dateA = new Date(a.created_at)
            const dateB = new Date(b.created_at)
            return dateB - dateA
        })
        return filtered
    }
    const filterByPriceProducts = () => {
        let filtered = products
        filtered.sort(function compare(a, b) {
            const dateA = parseFloat(a.price)
            const dateB = parseFloat(b.price)
            return dateB > dateA
        })
        return filtered
    }
    const filterByCats = () => {
        let filtered = []
        products.forEach(prod => {
            let isTrue = prod.categories.find(cat => cat.slug === catName)
            if (isTrue !== undefined) {
                filtered.push(prod)
            }
        })
        console.log(filtered);
        return filtered
    }

    const filterAction = (action) => {
        switch (action) {
            case 'best':
                return filterByPriceProducts()
            case 'newest':
                return filterByDateProducts()
            case 'category':
                return filterByCats()

            default:
                return products;
        }

    }


    const showProducts = (type) => {

        const filtered = filterAction(type);

        if (Object.keys(filtered).length !== 0) {
            let container = []
            filtered.forEach((el, key) => {
                if (key < parseInt(limit)) {
                    container.push(
                        <Product width={width} color={color} key={key}>
                            <img src={el.picture !== null ? '/storage/' + el.picture : '/storage/product_pictures/10.jpg'} alt="product img" />
                            <Link to={'/products/' + el.slug}><p className="title">{el.title}</p></Link>
                            <p className="price">$ {el.price}</p>
                        </Product>)
                }
            }
            )

            return container
        }
    }

    return (
        <Container>
            {products ? showProducts(mode) : <Loader />}
        </Container>
    );
}

export default connect(
    state => ({
        products: state.productsState.products,

    })
)(ProductsGrid);
import React, { Suspense } from 'react';
import { Container } from './Category.css';
import { useParams } from 'react-router-dom';
const ProductsGrid = React.lazy(() => import('../../components/products-grid/ProductsGrid'))
import Loader from '../../components/loader/Loader';

function Category() {

    let { slug } = useParams()
    let catTitle = slug.split('-')
    return (
        <Container>
            <h1>{catTitle[0]}</h1>
            <Suspense fallback={<Loader />}>
                <ProductsGrid width="33%" mode="category" limit="50" color="orange" catName={slug} />
            </Suspense >
        </Container>
    );
}

export default Category;
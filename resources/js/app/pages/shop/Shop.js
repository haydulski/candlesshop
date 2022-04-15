import React, { Suspense } from 'react';
import { Container } from './Shop.css';
const ProductsGrid = React.lazy(() => import('../../components/products-grid/ProductsGrid'))

function Shop() {
    return (
        <Container>
            <h1>All products</h1>
            <Suspense fallback={<p>Ładowanie...</p>}>
                <ProductsGrid width="33%" mode="all" limit="50" color="orange" />
            </Suspense >
        </Container>
    );
}

export default React.memo(Shop);
import React from 'react';
import {
    useParams
} from "react-router-dom";

function SingleProduct() {
    let { slug } = useParams();
    console.log(slug);
    return (
        <>
            <div className='mt-5'>Now showing post {slug}</div>
        </>
    );
}

export default SingleProduct;
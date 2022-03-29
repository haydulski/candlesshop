import React, { useState } from 'react';
import apiClient from '../../services/axios';

function Page2() {

    const [posts, getPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const handleBtn = () => {
        setLoading(true);
        apiClient.get('/products')
            .then((res) => {
                console.log(res.data)
                getPosts(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return posts.length === 0 ? (
        <>
            <h2>Posty</h2>
            <p>Brak postów do pokazania</p>
            <button onClick={handleBtn}>Odśwież</button>
            {loading ? '  Ładowanie produktów...' : ''}
        </>
    ) : (
        <>
            <h2>Posty</h2>

            <ul>
                {posts.map((product, key) => {
                    return (
                        <li className="all-posts" key={key}><h4>{product.title}</h4></li>
                    )
                })}
            </ul>
        </>
    );
}

export default Page2;
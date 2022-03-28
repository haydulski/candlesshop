import React, { useState } from 'react';
import axios from "axios";

function Page2() {

    const [posts, getPosts] = useState([])
    const handleBtn = () => {
        axios.post('/baza')
            .then((res) => {
                console.log(res.data);
                getPosts(res.data)
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
        </>
    ) : (
        <>
            <h2>Posty</h2>
            <ul>
                {posts.map((post, key) => {
                    return (
                        <li className="all-posts" key={key}>{post.title}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default Page2;
import axios from 'axios';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


function App() {

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('/sanctum/csrf-cookie').then(response => { })
    }, [])
    const loginUser = () => {
        const user1 = {
            email: 'dd@gmail.com',
            password: '12345678'
        }
        axios.post('/login', user1).then(response => {
            axios.get('/api/v1/products').then(res => {
                console.log(res.data);
            })
        })
    }


    return (
        <Router>
            <div className="header">
                <div onClick={loginUser}>Login user</div>

                <ul>
                    <li><Link to="/1">Strona 1</Link></li>
                    <li><Link to="/2">Strona 2</Link></li>
                    <li><Link to="/3">Strona 3</Link></li>

                </ul>
            </div>
            <div className="main-section">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="1" element={<Page1 />} />
                    <Route path="2" element={<Page2 />} />
                    <Route path="3" element={<Page3 />} />


                </Routes>
            </div>
        </Router >
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}

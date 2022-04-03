import apiClient from './services/axios'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Main from './pages/main/Main'
import Footer from './components/footer/footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/globalStyles'
import Navbar from './components/navbar/navbar'
import SingleProduct from './pages/singleProduct/SingleProduct'

function App() {

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Switch>

                    <Route path="/products/:slug" element={<SingleProduct />} />
                    <Route exact path="/" element={<Main />} />
                </Switch>
                <Footer />
            </ThemeProvider>
        </Router >
    );
}

export default App;

if (document.getElementById('main-root')) {
    ReactDOM.render(<App />, document.getElementById('main-root'));
}

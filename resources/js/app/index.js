import apiClient from './services/axios'
import React, { useEffect, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Footer from './components/footer/footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/globalStyles'
import Navbar from './components/navbar/navbar'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import ProtectedRoute from './services/ProtectedRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = React.lazy(() => import('./pages/main/Main'))
const SingleProduct = React.lazy(() => import('./pages/singleProduct/SingleProduct'))
const Shop = React.lazy(() => import('./pages/shop/Shop'))
const Category = React.lazy(() => import('./pages/category/Category'))
const UserAccount = React.lazy(() => import('./pages/userAccount/UserAccount'))
const Login = React.lazy(() => import('./pages/auth/Login'))
const Cart = React.lazy(() => import('./pages/cart/CartPage'))

const store = configureStore()
/*
const testCart = [{
    id: 1,
    title: 'test-1',
    photo: 'ass',
    price: '123',
    qty: 2
}]
localStorage.setItem('cart', JSON.stringify(testCart))
*/
function App({ cart }) {

    return (

        <Suspense fallback={<p>Page is loading...</p>}>
            <Router>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Navbar />
                    <Switch>

                        <Route path="/products/:slug" element={<SingleProduct />} />
                        <Route path="/category/:slug" element={<Category />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/user-login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/my-account" element={<ProtectedRoute>
                            <UserAccount />
                        </ProtectedRoute>} />

                        <Route exact path="/" element={<Main />} />
                        <Route element={<p>Adres nie istnieje</p>} />

                    </Switch>
                    <Footer />
                </ThemeProvider>
            </Router >
            <ToastContainer />
        </Suspense>
    );
}

export default App;

if (document.getElementById('main-root')) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main-root'));
}

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import { LoginContext } from './context/LoginContext';
import Footer from './components/Footer';
import Header from './components/Header';
import AddProducts from './pages/AddProductsPage';
import CartProduct from './pages/CartProduct';
import Checkout from './pages/Checkout';
import Login from './pages/LoginPage';
import MainPage from './pages/MainPage.js';
import ProductPage from './pages/ProductPage';
import SignUp from './pages/Sign-upPage';
import Success from './pages/Success';

function App() {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LoginContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='newproducts' element={<AddProducts />} />
          <Route path='cart' element={<CartProduct />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='success' element={<Success />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

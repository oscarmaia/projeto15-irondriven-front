import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import AddProducts from './pages/AddProductsPage';
import CartProduct from './pages/CartProduct';
import Checkout from './pages/Checkout';
import Login from './pages/LoginPage';
import MainPage from './pages/MainPage.js';
import ProductPage from './pages/ProductPage';
import SignUp from './pages/Sign-upPage';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='newproducts' element={<AddProducts />} />
        <Route path='carrinho' element={<CartProduct />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

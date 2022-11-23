import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import AddProducts from './pages/AddProductsPage';
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='newproducts' element={<AddProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

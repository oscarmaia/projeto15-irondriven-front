import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

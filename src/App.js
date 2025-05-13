import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { MainPage } from './pages/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Header />
            <MainPage />
            <Footer />
          </div>
        } />
        <Route path='/catalog' element={
          <div className="App">
            <Header />
            <Footer />
          </div>
        } />
        <Route path='/cart' element={
          <div className="App">
            <Header />
            <Footer />
          </div>
        } />
        <Route path='/profile' element={
          <div className="App">
            <Header />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

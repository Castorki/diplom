import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainPage } from './components/pages/mainPage/MainPage';
import { Catalog } from './components/pages/catalog/Catalog';
import { store } from './components/store/store';
import { Products } from './components/pages/products/Products';
import { Cart } from './components/pages/cart.js/Cart';
import Profile from './components/pages/profile/Profile';
import Register from './components/pages/profile/Register';
import Login from './components/pages/profile/Login';


function App() {
  return (
    <Provider store={store}>
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
              <Catalog />
              <Footer />
            </div>
          } />
          <Route path='/cart' element={

            <div className="App">
              <Header />
              <Cart />
              <Footer />
            </div>


          } />
          <Route path='/profile' element={
            <div className="App">
              <Header />
              <Profile />
              <Footer />
            </div>
          } />
          <Route path='/products' element={
            <div className="App">
              <Header />
              <Products />
              <Footer />
            </div>
          } />
          <Route path='/login' element={
            <div className="App">
              <Header />
              <Login />
              <Footer />
            </div>
          } />
          <Route path='/register' element={
            <div className="App">
              <Header />
              <Register />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

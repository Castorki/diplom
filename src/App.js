import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainPage } from './components/pages/mainPage/MainPage';
import { Catalog } from './components/pages/catalog/Catalog';
import { store } from './components/store/store';
import { Products } from './components/pages/products/Products';
import { Cart } from './components/pages/cart/Cart';
import Profile from './components/pages/profile/Profile';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Strenghts from './components/strenghts/Strengths';
import { SearchProducts } from './components/pages/serchProducts/SearchProducts';
import { ScrollRestoration } from './components/ScrollRestoration';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <MainPage />
                <Footer />
              </div>
            </ScrollRestoration>
          } />
          <Route path='/search' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <SearchProducts />
                <Footer />
              </div>
            </ScrollRestoration>
          } />
          <Route path='/catalog' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <Catalog />
                <Footer />
              </div>
            </ScrollRestoration>
          } />
          <Route path='/cart' element={
            <ScrollRestoration>

              <div className="App">
                <Header />
                <Cart />
                <Footer />
              </div>
            </ScrollRestoration>

          } />
          <Route path='/profile' element={
            <ScrollRestoration>

              <div className="App">
                <Header />
                <Profile />
                <Footer />
              </div>
            </ScrollRestoration>
          } />
          <Route path='/products' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <Products />
                <Footer />
              </div>
            </ScrollRestoration>

          } />
          <Route path='/login' element={
            <ScrollRestoration>

              <div className="App">
                <Header />
                <Login />
                <Strenghts />
                <Footer />
              </div>
            </ScrollRestoration>
          } />
          <Route path='/register' element={
            <ScrollRestoration>

              <div className="App">
                <Header />
                <Register />
                <Strenghts />
                <Footer />
              </div>
            </ScrollRestoration>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

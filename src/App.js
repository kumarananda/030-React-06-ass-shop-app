
import './_assets/css/bundle.css'
import './_assets/css/style.css'
import './App.css'
import Shop from './components/Pages/Shop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductSingle from './components/Pages/ProductSingle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/'element={ <Home/>} />
            <Route path='/shop'element={ <Shop/>} />
            <Route path='/shop/:id'element={ <ProductSingle/>} />
          </Routes>
        <Footer></Footer>
      </BrowserRouter>

    
    </>
  );
}

export default App;

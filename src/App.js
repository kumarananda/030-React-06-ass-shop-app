
import './_assets/css/bundle.css'
import './_assets/css/style.css'
import './App.css'
import Shop from './components/Pages/Shop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductSingle from './components/Pages/ProductSingle';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Contact from './components/Contact/Contact';
import Dashbord from './components/Admin/Dashbord'
import Products from './components/Admin/Products';
import Category from './components/Admin/Category';
import Tag from './components/Admin/Tag';
import Dash from './components/Admin/Dash';
import AddTag from './components/Admin/AddTag';
import ProductAdd from './components/Admin/ProductAdd';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

    // tag state
    const [tags, setTags] = useState([]); 
    // get category data
    const [getCat, setGetCat] = useState([]);

    // console.log(tags);
      // get data 
      useEffect( () => {
    
        axios.get('http://localhost:5050/tags').then( res => {
          setTags( res.data);
        })
      },[]);

      // get data 
      useEffect( () => {
        // Set category data
        axios.get('http://localhost:5050/category').then( res => {
        setGetCat(res.data)
        })
      },[]);


  



  return (
    <>
    
        <Header/>
          <Routes>
            <Route path='/'element={ <Home/>} />
            <Route path='/shop'element={ <Shop/>} />
            <Route path='/shop/:id'element={ <ProductSingle/>} />
            <Route path='/contact'element={ <Contact/>} />

            <Route path='/admin' element={<Dashbord/>} >
              <Route path='/admin' element={ <Dash/>} />
              <Route path='/admin/products' element={ <Products/>} />
              <Route path='/admin/add-products' element={ <ProductAdd tags={ tags } getCat={ getCat } />} />
              <Route path='/admin/category' element={ <Category getCat={ getCat } />} />
              <Route path='/admin/tag' element={ <Tag tags={ tags } />} />
              <Route path='/admin/add-tag' element={ <AddTag />} />
            </Route>
           
          </Routes>
        <Footer/>

    
    </>
  );
}

export default App;

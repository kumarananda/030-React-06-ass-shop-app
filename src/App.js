import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Shop from "./components/Pages/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductSingle from "./components/Pages/ProductSingle";

import Home from "./components/Pages/Home";
import Contact from "./components/Contact/Contact";
import Dashbord from "./components/Admin/Dashbord";
import Products from "./components/Admin/Products";
import Category from "./components/Admin/Category";
import Tag from "./components/Admin/Tag";
import Dash from "./components/Admin/Dash";
import AddTag from "./components/Admin/AddTag";
import ProductAdd from "./components/Admin/ProductAdd";

import axios from "axios";
import ProductEdit from "./components/Admin/ProductEdit";
import "./_assets/css/bundle.css";
import "./_assets/css/style.css";
import "./App.css";

function App() {
  // tag state
  const [tags, setTags] = useState([]);
  // get category data
  const [getCat, setGetCat] = useState([]);
  // get products data
  const [product, setProduct] = useState([]);
  //slug Genarete
  const makeSlug = (data) => {
    let arr = data.split(" ");
    return arr.join("-").toLowerCase();
  };

  // find cat
  const find_cat = (id) => {
    if (id !== "") {
      let cat = getCat.find((data) => data.id == id);
      return cat.name;
    }
  };

  //

  // console.log(products);
  // get tags data
  useEffect(() => {
    axios.get("http://localhost:5050/tags").then((res) => {
      setTags(res.data);
    });
  }, []);

  // get category data
  useEffect(() => {
    // Set category data
    axios.get("http://localhost:5050/category").then((res) => {
      setGetCat(res.data);
    });
  }, []);

  // get category data
  useEffect(() => {
    // Set category data
    axios.get("http://localhost:5050/products").then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              tags={tags}
              product={product}
              setProduct={setProduct}
              getCat={getCat}
            />
          }
        />
        <Route
          path="/shop/:slug"
          element={<ProductSingle find_cat={find_cat} makeSlug={makeSlug} />}
        />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Dashbord />}>
          <Route path="/admin" element={<Dash />} />
          <Route
            path="/admin/products"
            element={<Products product={product} />}
          />
          <Route
            path="/admin/add-products"
            element={
              <ProductAdd tags={tags} getCat={getCat} makeSlug={makeSlug} />
            }
          />
          <Route
            path="/admin/edit-products/:id"
            element={
              <ProductEdit tags={tags} getCat={getCat} makeSlug={makeSlug} />
            }
          />
          <Route
            path="/admin/category"
            element={<Category getCat={getCat} makeSlug={makeSlug} />}
          />
          <Route
            path="/admin/tag"
            element={<Tag tags={tags} makeSlug={makeSlug} />}
          />
          <Route path="/admin/add-tag" element={<AddTag />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;

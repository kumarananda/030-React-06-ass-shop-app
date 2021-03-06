import React, { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = ({ product, setProduct, getCat, tags }) => {
  const [search, setSearch] = useState([]);

  // console.log(search);
  // search result
  useEffect(() => {
    if (search !== "") {
      axios.get(`http://localhost:5050/products?q=${search}`).then((res) => {
        setProduct(res.data);
      });
    }
  });

  // console.log(search);

  const haldleCatSearch = (e, id) => {
    e.preventDefault();

    setSearch("");
    axios.get(`http://localhost:5050/category/${id}/products`).then((res) => {
      setProduct(res.data);
    });
  };

  // handle tag searce
  const handleTagSeasch = (e, id) => {
    e.preventDefault();

    setSearch("");
    axios.get(`http://localhost:5050/tags/${id}/products`).then((res) => {
      setProduct(res.data);
    });
  };

  return (
    <>
      <div className="sidebar">
        <div className="widget">
          <h6 className="upper">Search Shop</h6>
          <form>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search.."
              className="form-control"
            />
          </form>
        </div>
        {/* <!-- end of widget        --> */}
        <div className="widget">
          <h6 className="upper">Categories</h6>
          <ul className="nav">
            {getCat.map((data) => (
              <li>
                <a onClick={(e) => haldleCatSearch(e, data.id)} href={data.id}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- end of widget        --> */}
        <div className="widget">
          <h6 className="upper">Popular Tags</h6>
          <div className="tags clearfix">
            {tags.map((data) => (
              <a onClick={(e) => handleTagSeasch(e, data.id)} href="#">
                {data.name}
              </a>
            ))}

            <a href="#">Hipster</a>
          </div>
        </div>
        {/* <!-- end of widget      --> */}
        <div className="widget">
          <h6 className="upper">Trending Products</h6>
          <ul className="nav product-list">
            <li>
              <div className="product-thumbnail">
                <img src={product} alt="" />
              </div>
              <div className="product-summary">
                <a href="#">Premium Suit Blazer</a>
                <span>$199.99</span>
              </div>
            </li>
            <li>
              <div className="product-thumbnail">
                <img src={product} alt="" />
              </div>
              <div className="product-summary">
                <a href="#">Premium Suit Blazer</a>
                <span>$199.99</span>
              </div>
            </li>
            <li>
              <div className="product-thumbnail">
                <img src={product} alt="" />
              </div>
              <div className="product-summary">
                <a href="#">Premium Suit Blazer</a>
                <span>$199.99</span>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- end of widget          --> */}
      </div>
      {/* <!-- end of sidebar--> */}
    </>
  );
};

export default Sidebar;

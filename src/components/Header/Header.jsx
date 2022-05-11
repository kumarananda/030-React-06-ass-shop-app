import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../_assets/images/logo_light.png'
import './Header.css'

const Header = () => {
  return (
    <>
        {/* * <!-- Navigation Bar--> * */}
        <header id="topnav">
            <div className="container">
                {/* <!-- Logo container--> */} 
                <div className="logo">
                <Link to="/">
                    <img src={ logo } alt="" className="logo-light"/> 
                    <img src="images/logo_dark.png" alt="" className="logo-dark"/>
                </Link>
                </div>
                {/* <!-- End Logo container--> */}
                <div className="menu-extras">
                <div className="menu-item">
                    {/* <!-- Shopping cart--> */} 
                    <div className="cart">
                    <a href="#">
                        <i className="ti-bag"></i><span className="cart-number">2</span>
                    </a>
                    <div className="shopping-cart">
                        <div className="shopping-cart-info">
                        <div className="row">
                            <div className="col-xs-6">
                            <h6 className="upper">Your Cart</h6>
                            </div>
                            <div className="col-xs-6 text-right">
                            <h6 className="upper">$399.99</h6>
                            </div>
                        </div>
                        {/* <!-- end of row--> */}
                        </div>
                        <ul className="nav product-list">
                        <li>
                            <div className="product-thumbnail">
                            <img src="images/shop/2.jpg" alt=""/>
                            </div>
                            <div className="product-summary">
                            <a href="#">Premium Suit Blazer</a><span>$199.99</span>
                            </div>
                        </li>
                        <li>
                            <div className="product-thumbnail">
                            <img src="images/shop/5.jpg" alt=""/>
                            </div>
                            <div className="product-summary">
                            <a href="#">Reiss Vara Tailored Blazer</a><span>$199.99</span>
                            </div>
                        </li>
                        </ul>
                        <p><a href="#" className="btn btn-color btn-block btn-sm">Checkout</a>
                        </p>
                    </div>
                    </div>
                    {/* <!-- End shopping cart--> */}
                </div>
                <div className="menu-item">
                    {/* <!-- Search Form--> */}
                    <div className="search">
                    <a href="#">
                        <i className="ti-search"></i>
                    </a>
                    <div className="search-form">
                        <form action="#" className="inline-form">
                        <div className="input-group">
                            <input type="text" placeholder="Search" className="form-control"/><span className="input-group-btn"><button type="button" className="btn btn-color"><span><i className="ti-search"></i></span>
                            </button>
                            </span>
                        </div>
                        </form>
                    </div>
                    </div>
                    {/* <!-- End search form--> */}
                </div>
                <div className="menu-item">
                    {/* <!-- Mobile menu toggle--> */}
                    <a className="navbar-toggle">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </a>
                    {/* <!-- End mobile menu toggle--> */}
                </div>
                </div>
                <div id="navigation">
                {/* <!-- Navigation Menu--> */}
                <ul className="navigation-menu">
                    <li className="has-submenu">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="has-submenu">
                    <Link to="/contact">blog-page </Link>
                    </li>

                    <li className="has-submenu">
                    <Link to="/shop">Shop</Link>
                    </li>
                    <li className="has-submenu">
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li className="has-submenu">
                    <Link to="/admin">Admin</Link>
                    </li>

                </ul>
                    {/* <!-- End navigation menu        --> */}
                </div>
            </div>
        </header>

        <section className="page-title parallax">
            <div data-parallax="scroll" data-image-src="images/bg/19.jpg" className="parallax-bg"></div>
            <div className="parallax-overlay">
                <div className="centrize">
                <div className="v-center">
                    <div className="container">
                    <div className="title center">
                        <h1 className="upper">Shop</h1>
                        <h4>Free Delivery Worldwide.</h4>
                        <hr/>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </section>
    
    
    
    </>
  )
}

export default Header
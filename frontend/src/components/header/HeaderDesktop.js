import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderDesktop extends Component{

    renderAccount (props) {
        var link = props.logged_in? "/dashboard" : "/login";
        return link;
	}

	render (){
		return (
			<div className="container-menu-header">
	          <div className="topbar">
	            <div className="topbar-social">
	              <a href="#" className="topbar-social-item fa fa-facebook" />
	              <a href="#" className="topbar-social-item fa fa-instagram" />
	              <a href="#" className="topbar-social-item fa fa-pinterest-p" />
	              <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
	              <a href="#" className="topbar-social-item fa fa-youtube-play" />
	            </div>
	            <span className="topbar-child1">
	              Free shipping for standard order over $100
	            </span>
	            <div className="topbar-child2">
	              <div className="topbar-language rs1-select2">
	                <select className="selection-1" name="time">
	                  <option>USD</option>
	                  <option>EUR</option>
	                </select>
	              </div>
	            </div>
	          </div>
	          <div className="wrap_header">
	            {/* Logo */}
	            <a href="index.html" className="logo">
	              <img src={"/static/images/icons/logo.png"} alt="IMG-LOGO" />
	            </a>
	            {/* Menu */}
	            <div className="wrap_menu">
	              <nav className="menu">
	                <ul className="main_menu">
	                  <li>
	                    <Link to='/frontend'>Home</Link>
	                  </li>
	                  <li>
	                    <Link to='/store'>Store</Link>
	                  </li>
	                  <li className="sale-noti">
	                    <a href="product.html">Sale</a>
	                  </li>
	                  <li>
	                    <a href="cart.html">Features</a>
	                  </li>
	                  <li>
	                    <a href="blog.html">Blog</a>
	                  </li>
	                  <li>
	                    <a href="about.html">About</a>
	                  </li>
	                  <li>
	                    <a href="contact.html">Contact</a>
	                  </li>
	                </ul>
	              </nav>
	            </div>
	            {/* Header Icon */}
	            <div className="header-icons">
	              
	              <span className="header-wrapicon1 dis-block">
                    <Link to={ this.renderAccount(this.props.user) }>
	                	<img src={"/static/images/icons/icon-header-01.png"} className="header-icon1" alt="ICON" />
	                </Link>

	              </span>
	              <span className="linedivide1" />
	              <div className="header-wrapicon2">
	                <img src={"/static/images/icons/icon-header-02.png"} className="header-icon1 js-show-header-dropdown" alt="ICON" />
	                <span className="header-icons-noti">0</span>
	                {/* Header cart noti */}
	                <div className="header-cart header-dropdown">
	                  <ul className="header-cart-wrapitem">
	                    <li className="header-cart-item">
	                      <div className="header-cart-item-img">
	                        <img src={"/static/images/item-cart-01.jpg"} alt="IMG" />
	                      </div>
	                      <div className="header-cart-item-txt">
	                        <a href="#" className="header-cart-item-name">
	                          White Shirt With Pleat Detail Back
	                        </a>
	                        <span className="header-cart-item-info">
	                          1 x $19.00
	                        </span>
	                      </div>
	                    </li>
	                    <li className="header-cart-item">
	                      <div className="header-cart-item-img">
	                        <img src="{% static 'images/item-cart-02.jpg' %}" alt="IMG" />
	                      </div>
	                      <div className="header-cart-item-txt">
	                        <a href="#" className="header-cart-item-name">
	                          Converse All Star Hi Black Canvas
	                        </a>
	                        <span className="header-cart-item-info">
	                          1 x $39.00
	                        </span>
	                      </div>
	                    </li>
	                    <li className="header-cart-item">
	                      <div className="header-cart-item-img">
	                        <img src="{% static 'images/item-cart-03.jpg' %}" alt="IMG" />
	                      </div>
	                      <div className="header-cart-item-txt">
	                        <a href="#" className="header-cart-item-name">
	                          Nixon Porter Leather Watch In Tan
	                        </a>
	                        <span className="header-cart-item-info">
	                          1 x $17.00
	                        </span>
	                      </div>
	                    </li>
	                  </ul>
	                  <div className="header-cart-total">
	                    Total: $75.00
	                  </div>
	                  <div className="header-cart-buttons">
	                    <div className="header-cart-wrapbtn">
	                      {/* Button */}
	                      <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
	                        View Cart
	                      </a>
	                    </div>
	                    <div className="header-cart-wrapbtn">
	                      {/* Button */}
	                      <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
	                        Check Out
	                      </a>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
		);
	}
}

const mapStateToProps = (state)=> {
  return { user : state.user };
}

export default connect(mapStateToProps)(HeaderDesktop);
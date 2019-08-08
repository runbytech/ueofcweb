import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, activeMenu }) => (
  <header>
    <div className="container-fluid">
      <div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
        
        <div id="logo">
          <h1>
            <Link to="/">
              <span className="logo mr-2">
                <img src="/icon-puple-64.png" />
              </span>
              UltronEle
            </Link>
          </h1>
        </div>
        
        <div className="nav_w3ls">
          <nav>
            <label htmlFor="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li>
                <Link to="/" className={activeMenu=='index'?'active':''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className={activeMenu=='product'?'active':''}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/price" className={activeMenu=='price'?'active':''}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className={activeMenu=='contact'?'active':''}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="d-flex mt-lg-1 mt-sm-2 mt-3 justify-content-center">
          <div className="search-w3layouts mr-3">
            <form action="#" method="post" className="search-bottom-wthree d-flex">
              <input className="search" type="search" placeholder="Search Here..." required="" />
              <button className="form-control btn" type="button">
                <span className="fa fa-search"></span>
              </button>
            </form>
          </div>
        
          <a className="dwn-w3ls btn" href="https://github.com/runbytech/ultron-ele" target="_blank">
            <span className="fab fa-github"></span>
          </a>
        </div>

      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

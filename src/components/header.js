import React from 'react'
import Navigation from './navigation'
import './style/header.scss'

const Header = ({ title }) => (
  <header>
    <div className="container">
      <div className="divider">
        <div className="logo">
          <a className="logo" href="#top-section">
            <span>{title} Logo</span>
          </a>
          <a className="menu-button" href="#">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <Navigation />
      </div>
    </div>
  </header>
)

export default Header
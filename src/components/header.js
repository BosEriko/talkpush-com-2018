import React from 'react'
import Navigation from './navigation'
import './style/header.scss'

class Header extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      if (document.scrollingElement.scrollTop >= 50) {
        document.getElementById("header").classList.add("active")
      }
      else {
        document.getElementById("header").classList.remove("active")
      }
    }
  }
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="divider">
            <div className="logo">
              <a className="logo" href="#top-section">
                <span>{this.props.title} Logo</span>
              </a>
              <a className="menu-button" href="#">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
            </div>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default Header
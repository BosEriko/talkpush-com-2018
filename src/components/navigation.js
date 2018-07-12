import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './style/header.scss'

class Navigation extends React.Component {
  calendlyPopUp = () => {
    Calendly.showPopupWidget('https://calendly.com/talkpush-demo/talkpush-intro-demo/');
  }
  render() {
    return (
      <div className="menu">
        <Helmet>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
        </Helmet>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/jobs">Career</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li>
            <span>Services<i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <ul>
              <li><Link to="/crm">CRM</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
          </li>
          <li><a href="https://blog.talkpush.com/" target="_blank">Blog</a></li>
          <li><a href="#" onClick={this.calendlyPopUp}><i className="fa fa-envelope-open-o fa-fw" aria-hidden="true"></i>Book a Demo</a></li>
        </ul>
      </div>
    )
  }
}

export default Navigation

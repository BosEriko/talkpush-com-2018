import React from 'react'
import Link from 'gatsby-link'
import './style/header.scss'

const Navigation = () => (
  <div className="menu">
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
      <li><a href="#" onclick="Calendly.showPopupWidget('https://calendly.com/talkpush-demo/talkpush-intro-demo/');return false;"><i className="fa fa-envelope-open-o fa-fw" aria-hidden="true"></i>Book a Demo</a></li>
    </ul>
  </div>
)

export default Navigation

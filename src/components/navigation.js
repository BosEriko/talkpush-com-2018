import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './style/header.scss'

import crmIcon from '../icons/crm.svg'
import chatbotIcon from '../icons/chatbot.svg'

class Navigation extends React.Component {
  calendlyPopUp = () => {
    Calendly.showPopupWidget('https://calendly.com/talkpush-demo/talkpush-intro-demo/');
  }
  componentDidMount() {
    let dropdownStatus = {}
    const dropdown = function(id) {
      dropdownStatus[id] = false
      let dropdownMenu = document.getElementById(id + "DropdownMenu")
      let dropdownToggle = document.getElementById(id + "DropdownToggle")
      let body = document.getElementsByTagName("body")[0]
      dropdownToggle.addEventListener("click", function(){
        if (!dropdownStatus[id]){
          dropdownMenu.style.display = 'block'
          dropdownStatus[id] = true
        }else{
          dropdownMenu.style.display = 'none'
          dropdownStatus[id] = false
        }
      })
      body.addEventListener("click", function(){
        dropdownMenu.style.display = 'none'
        dropdownStatus[id] = false
      });
      dropdownToggle.addEventListener("click", function(e){
        e.stopPropagation();
      });
      dropdownMenu.addEventListener("click", function(e){
        e.stopPropagation();
      });
    }
    dropdown("about");
    dropdown("services");
  }
  render() {
    return (
      <div className="menu" id="headerMenu">
        <Helmet>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
        </Helmet>
        <ul>
          <li><Link activeClassName="activePage" exact={true} to="/">Home</Link></li>
          <li>
            <span id="aboutDropdownToggle">About<i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <ul id="aboutDropdownMenu">
              <li><Link activeClassName="activePage" to="/our-style"><img src={chatbotIcon} alt="Our Style" />Our Style</Link></li>
              <li><Link activeClassName="activePage" to="/our-team"><img src={chatbotIcon} alt="Chatbot" />Our Team</Link></li>
              <li><Link activeClassName="activePage" to="/jobs"><img src={chatbotIcon} alt="Join Our Team" />Join Our Team</Link></li>
              <li><Link activeClassName="activePage" to="/gallery"><img src={chatbotIcon} alt="Gallery" />Gallery</Link></li>
            </ul>
          </li>
          <li><Link activeClassName="activePage" to="/jobs">Career</Link></li>
          <li><Link activeClassName="activePage" to="/customers">Customers</Link></li>
          <li>
            <span id="servicesDropdownToggle">Services<i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <ul id="servicesDropdownMenu">
              <li><Link activeClassName="activePage" to="/crm"><img src={crmIcon} alt="CRM" />CRM</Link></li>
              <li><Link activeClassName="activePage" to="/chatbot"><img src={chatbotIcon} alt="Chatbot" />Chatbot</Link></li>
            </ul>
          </li>
          <li><a href="https://blog.talkpush.com/" target="_blank">Blog</a></li>
          <li><a href="#" onClick={this.calendlyPopUp}><i className="fa fa-send-o fa-fw" aria-hidden="true"></i>Book a Demo</a></li>
        </ul>
      </div>
    )
  }
}

export default Navigation

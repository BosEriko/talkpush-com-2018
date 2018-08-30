import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/customers.module.scss'
import '../pages-style/customers.scss'

import logo247 from '../pages-images/customers/247-logo.svg'

class CustomersPage extends React.Component {
  pageVariables = {
    pageCode: 'customers',
    pageDescription: 'Customers who want to accelerate their hiring turn to Talkpush',
    pageTitle: 'Customers',
  }

  enterCDB = (id) => {
    document.getElementById("item-preview-" + id).style.display = "block"
    document.getElementById("customer-shadow").style.display = "block"
  }

  leaveCDB = (id) => {
    document.getElementById("item-preview-" + id).style.display = "none"
    document.getElementById("customer-shadow").style.display = "none"
  }

  blockItem = (id, logoWhite, logoBlack, companyName, region) => {
    return (
      <div className="block">
        <div className="dimension-holder customer-dimension-box" onMouseEnter={() => this.enterCDB(id)} onMouseLeave={() => this.leaveCDB(id)}>
          <div className="dimension">
            <div className="item">
              <div className="logo-dimension">
                <div className="logo-holder">
                  <div className="logo-center">
                    <img src={logoWhite} alt={id} />
                  </div>
                </div>
              </div>
            </div>
            <div className="item preview" id={"item-preview-" + id}>
              <div className="logo-dimension">
                <div className="logo-holder">
                  <div className="logo-center">
                    <img src={logoBlack} alt={id} />
                  </div>
                </div>
              </div>
              <h3>{companyName}</h3>
              <h4>
                <i className="fa fa-globe fa-fw" aria-hidden='true'></i>
                <span>{region}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{this.pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderContent}>
            <h1 className="global-hero-glow-white">Customers who let their talent talk</h1>
            <p>"Customers come to us when they want to remove any barrier that stands between them and their next great hire."</p>
          </div>
        </div>
        <div className="customers-icons">
          <div className="container">
            <div className="divider">
              <div className="shadow" id="customer-shadow"></div>
              {this.blockItem("247", logo247, logo247, "Prudential", "South East Asia")}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomersPage

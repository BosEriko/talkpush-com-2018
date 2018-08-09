import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/customers.module.scss'

const pageVariables = {
  pageCode: 'customers',
  pageDescription: 'Customers who want to accelerate their hiring turn to Talkpush',
}

const CustomersPage = () => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}>
      <div className={styles.blockHeaderContent}>
        <h1 className="global-hero-glow-white">Customers who let their talent talk</h1>
        <p>
          "Customers come to us when they want to remove any barrier that stands between them and their next great hire."
        </p>
      </div>
    </div>
    <div className={styles.blockContent}>
      <div className="container">
        Content goes here.
      </div>
    </div>
  </div>
)

export default CustomersPage

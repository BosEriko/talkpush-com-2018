import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/crm.module.scss'
import conversationsImage from '../pages-images/crm/conversations.png'

const pageVariables = {
  pageCode: 'crm',
  pageDescription: 'Candidate Relationship Management for the messaging age',
}

const CrmPage = () => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}>
      <div className={styles.blockHeaderContent}>
        <div className="container">
          <h1 className="global-hero-glow-white">A CRM designed for <span>Messaging and Voice</span></h1>
        </div>
      </div>
    </div>
    {/* <p><img src={conversationsImage} alt="Conversations"/></p> */}
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default CrmPage

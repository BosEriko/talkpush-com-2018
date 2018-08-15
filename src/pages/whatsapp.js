import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/whatsapp.module.scss'

const pageVariables = {
  pageCode: 'whatsapp',
  pageDescription: 'WhatsApp',
}

const WhatsAppPage = () => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default WhatsAppPage

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
    <div className={styles.blockHeader}>
      <div className={styles.blockHeaderDivide}>
        <div className={styles.blockHeaderDivideLeft}></div>
        <div className={styles.blockHeaderDivideMain}>
          <div className={styles.blockHeaderDivideMainLeft}>
            <i className="fa fa-whatsapp fa-fw" aria-hidden="true"></i>
          </div>
          <div className={styles.blockHeaderDivideMainRight}>
            <div className={styles.blockHeaderDivideMainRightFill}></div>
            <h1>Whats<span>App</span></h1>
            <p>You’ve been asking for it for years… Finally WhatsApp is opening its API for business accounts! Talkpush is working with Nexmo to integrate its CRM with WhatsApp. This means your business can finally access 1.5 billion WhatsApp users!</p>
            <div className={styles.blockHeaderDivideMainRightFill}></div>
          </div>
        </div>
        <div className={styles.blockHeaderDivideRight}></div>
      </div>
    </div>
    <div className={styles.blockContent}>
      hohoho
    </div>
  </div>
)

export default WhatsAppPage

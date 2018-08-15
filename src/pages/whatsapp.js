import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/whatsapp.module.scss'
import whatsAppUser from '../pages-images/whatsapp/whatsapp-user.png'

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
      <div className="container">

        <div className={styles.blockContentItem}>
          <div className={styles.blockContentItemImage}>
            <img src={whatsAppUser} alt="WhatsApp User"/>
          </div>
          <div className={styles.blockContentItemContent}>
            <h3 className="global-hero-glow-green">Reach 1.5 billion active users</h3>
            <p>WhatsApp Business + Talkpush CRM = an enjoyable candidate experience.</p>
            <p>Talkpush CRM was designed for messaging. It was initially built to support SMS/Text messaging, and later added the integration with Facebook Messenger as soon as the API became available (summer 2016).</p>
            <p>We believe that employers have a responsibility to treat candidates with the same love and care as they treat customers. This starts with designing a recruitment process which makes the life of their candidates simple. Offering candidates a digital assistant which can direct their applications via their favorite messaging app is a big step in the right direction.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default WhatsAppPage

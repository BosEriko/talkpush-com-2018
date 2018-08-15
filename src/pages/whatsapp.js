import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/whatsapp.module.scss'
import whatsAppUser from '../pages-images/whatsapp/whatsapp-user.png'
import iphoneFrame from '../pages-images/whatsapp/iphone-frame.png'
import whatsappVideo from '../pages-images/whatsapp/video.mp4'

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
            <img src={whatsAppUser} alt="WhatsApp User" />
          </div>
          <div className={styles.blockContentItemContent}>
            <h3 className="global-hero-glow-green">Reach 1.5 billion active users</h3>
            <p>WhatsApp Business + Talkpush CRM = an enjoyable candidate experience.</p>
            <p>Talkpush CRM was designed for messaging. It was initially built to support SMS/Text messaging, and later added the integration with Facebook Messenger as soon as the API became available (summer 2016).</p>
            <p>We believe that employers have a responsibility to treat candidates with the same love and care as they treat customers. This starts with designing a recruitment process which makes the life of their candidates simple. Offering candidates a digital assistant which can direct their applications via their favorite messaging app is a big step in the right direction.</p>
          </div>
        </div>

        <div className={styles.blockContentItemReverse}>
          <div className={styles.blockContentItemReverseImage}>
            <div className={styles.blockContentItemReverseImageVideo}>
              <video autoPlay loop>
                <source src={whatsappVideo} type="video/mp4" />
              </video>
            </div>
            <img src={iphoneFrame} alt="WhatsApp User" />
          </div>
          <div className={styles.blockContentItemReverseContent}>
            <h3 className="global-hero-glow-green">Your talent pool lives on WhatsApp</h3>
            <p>Being candidate-centric begins with being available</p>
            <p>Of course, making it easier for candidates to reach you is a no brainer. When you remove barriers between you and your talent pool, you can expect your numbers to grow and that comes with a few challenges:</p>
            <ul>
              <li>How do you get back to everyone in time?</li>
              <li>How can you direct the incoming inquiries to the right jobs?</li>
              <li>How can you answer all their questions?</li>
            </ul>
            <p>By integrating your WhatsApp Business account with your Talkpush CRM you are able to sort, screen and engage with a large volume of talent while maintaining a positive experience, with a short response time, a personalized and customized candidate experience, and a direct link to your recruitment team. With Talkpush you can funnel your applicants from social media, job boards, career pages, employee referrals and more directly to WhatsApp. Click <a href="https://calendly.com/talkpush-demo/talkpush-intro-demo" target="_blank">here to schedule a demo of the Talkpush CRM</a> (to see how to implement it alongside your Whatsapp Business account).</p>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default WhatsAppPage

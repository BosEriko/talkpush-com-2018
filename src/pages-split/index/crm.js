import React from 'react'
import styles from './style/crm.module.scss'
import crmIcon from '../../icons/crm-white.svg'
import laptopActive from './images/crm/laptop-active.svg'
import laptop from './images/crm/laptop.svg'
import mobileActive from './images/crm/mobile-active.svg'
import mobile from './images/crm/mobile.svg'

const CrmIndexPageSplit = () => (
  <div className={styles.block}>
    <div className="container">
      <div className={styles.blockDivider}>
        <div className={styles.blockDividerLeft}>
          <img id="index-page-crm-block-laptop-active"  className={styles.blockDividerLeftLaptopActive}   src={laptopActive}  alt="Laptop Active"   title="Laptop Active"/>
          <img id="index-page-crm-block-laptop"         className={styles.blockDividerLeftLaptop}         src={laptop}        alt="Laptop"          title="Laptop"/>
          <img id="index-page-crm-block-mobile-active"  className={styles.blockDividerLeftMobileActive}   src={mobileActive}  alt="Mobile Active"   title="Mobile Active"/>
          <img id="index-page-crm-block-mobile"         className={styles.blockDividerLeftMobile}         src={mobile}        alt="Mobile"          title="Mobile"/>
        </div>
        <div className={styles.blockDividerRight}>
          <h2 className="global-hero-glow-white m-0 p-0">Finally a CRM that<br />Lets You Talk</h2>
          <p>Recruitment is not about tracking, it's about talking. Talkpush initiates thousands of conversations between recruiters and candidates via chat, social media and voice to build a pre-qualified talent pool that is engaged and responsive.</p>
          <div className={styles.blockDividerRightToggleButton}>
            <ul>
              <li><a href="#Mobile" className="global-button text-lowercase active">Mobile</a></li>
              <li><a href="#Web" className="global-button text-lowercase">Web</a></li>
            </ul>
          </div>
          <div className={styles.blockDividerRightCrmButton}><a href="#CRM" className="global-button text-lowercase"><img src={crmIcon} alt="CRM" />Discover our CRM Features</a></div>
        </div>
      </div>
    </div>
  </div>
)

export default CrmIndexPageSplit
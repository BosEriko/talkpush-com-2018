import React from 'react'
import styles from './style/crm.module.scss'
import crmIcon from '../../icons/crm-white.svg'

const CrmIndexPageSplit = () => (
  <div className={styles.block}>
    <div className="container">
      <div className={styles.blockDivider}>
        <div className={styles.blockDividerLeft}>1</div>
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
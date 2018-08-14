import React from 'react'
import styles from './style/crm.module.scss'
import Link from 'gatsby-link'
import crmIcon from '../../icons/crm-white.svg'
import laptopActive from './images/crm/laptop-active.svg'
import laptopInactive from './images/crm/laptop.svg'
import mobileActive from './images/crm/mobile-active.svg'
import mobileInactive from './images/crm/mobile.svg'

class CrmIndexPageSplit extends React.Component {
  componentDidMount () {
    const mobileToggle        = document.getElementById("index-page-crm-block-mobile-toggle")
    const webToggle           = document.getElementById("index-page-crm-block-web-toggle")
    const blockMobileActive   = document.getElementById("index-page-crm-block-mobile-active")
    const blockMobileInactive = document.getElementById("index-page-crm-block-mobile-inactive")
    const blockWebActive      = document.getElementById("index-page-crm-block-laptop-active")
    const blockWebInactive    = document.getElementById("index-page-crm-block-laptop-inactive")
    mobileToggle.addEventListener("click", function(e){
      blockMobileActive.setAttribute("style", "display: inline-block;")
      blockMobileInactive.setAttribute("style", "display: none;")
      blockWebActive.setAttribute("style", "display: none;")
      blockWebInactive.setAttribute("style", "display: inline-block;")
      mobileToggle.classList.add("active")
      webToggle.classList.remove("active")
      e.stopPropagation();
    })
    webToggle.addEventListener("click", function(e){
      blockWebActive.setAttribute("style", "display: inline-block;")
      blockWebInactive.setAttribute("style", "display: none;")
      blockMobileActive.setAttribute("style", "display: none;")
      blockMobileInactive.setAttribute("style", "display: inline-block;")
      webToggle.classList.add("active")
      mobileToggle.classList.remove("active")
      e.stopPropagation();
    })
  }
  render() {
    return (
      <div className={styles.block}>
        <div className="container">
          <div className={styles.blockDivider}>
            <div className={styles.blockDividerLeft}>
              <img id="index-page-crm-block-laptop-active"    className={styles.blockDividerLeftLaptopActive}   src={laptopActive}    alt="Laptop Active"   title="Laptop Active"/>
              <img id="index-page-crm-block-laptop-inactive"  className={styles.blockDividerLeftLaptopInactive} src={laptopInactive}  alt="Laptop Inactive" title="Laptop Inactive"/>
              <img id="index-page-crm-block-mobile-active"    className={styles.blockDividerLeftMobileActive}   src={mobileActive}    alt="Mobile Active"   title="Mobile Active"/>
              <img id="index-page-crm-block-mobile-inactive"  className={styles.blockDividerLeftMobileInactive} src={mobileInactive}  alt="Mobile Inactive" title="MobileInactive"/>
            </div>
            <div className={styles.blockDividerRight}>
              <h2 className="global-hero-glow-white m-0 p-0">Finally a CRM that<br />Lets You Talk</h2>
              <p>Recruitment is not about tracking, it's about talking. Talkpush initiates thousands of conversations between recruiters and candidates via chat, social media and voice to build a pre-qualified talent pool that is engaged and responsive.</p>
              <div className={styles.blockDividerRightToggleButton}>
                <ul>
                  <li><a id="index-page-crm-block-mobile-toggle" href="#Mobile" className="global-button text-lowercase active">Mobile</a></li>
                  <li><a id="index-page-crm-block-web-toggle" href="#Web" className="global-button text-lowercase">Web</a></li>
                </ul>
              </div>
              <div className={styles.blockDividerRightCrmButton}><Link to="/crm" className="global-button text-lowercase"><img src={crmIcon} alt="CRM" />Discover our CRM Features</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CrmIndexPageSplit
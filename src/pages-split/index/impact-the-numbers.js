import React from 'react'
import styles from './style/impact-the-numbers.module.scss'
import hexagonIcon from './images/impact-the-numbers/hexagon.svg'
import sampleIcon from './images/impact-the-numbers/sample.svg' 

const ImpactTheNumbersIndexPageSplit = () => (
  <div className={styles.block}>
    <div className={styles.blockFilter}>
      <div className="container">
        <h2 className="global-hero-glow-white m-0 p-0">Impact the numbers that matter</h2>
        <h4 className="p-0">Meet your candidates where they live and create engaging digital recruitment experiences</h4>
        <div className={styles.blockFilterDivider}>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={sampleIcon} alt="Reduction" title="Reduction" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0">65%</h3>
            <p className={styles.blockFilterDividerItemMessage}>Reduction in costs per hire</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="#" className="global-button text-lowercase">Case Study: Alorica</a>
            </div>
          </div>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={sampleIcon} alt="Satisfaction" title="Satisfaction" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0">35%</h3>
            <p className={styles.blockFilterDividerItemMessage}>Candidate satisfaction NPS</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="#" className="global-button text-lowercase">Case Study: Genpact</a>
            </div>
          </div>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={sampleIcon} alt="Processed" title="Processed" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0">10x</h3>
            <p className={styles.blockFilterDividerItemMessage}>Candidates processed per recruiter</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="#" className="global-button text-lowercase">Case Study: Starwood</a>
            </div>
          </div>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={sampleIcon} alt="Reduction" title="Reduction" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0" style={{ fontSize: '2.5rem', margin: '1rem 0' }}>1,328,921</h3>
            <p className={styles.blockFilterDividerItemMessage}>Automated conversations</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="#" className="global-button text-lowercase">More about Talkpush</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)

export default ImpactTheNumbersIndexPageSplit
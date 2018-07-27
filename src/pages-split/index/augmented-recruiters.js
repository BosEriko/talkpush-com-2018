import React from 'react'
import styles from './style/augmented-recruiters.module.scss'

class AugmentedRecruitersIndexPageSplit extends React.Component {
  componentDidMount() {
    let testimonialSection                = document.getElementById('testimonial-section')
    let testimonialSectionDivideItems     = document.getElementsByClassName('testimonial-section-divide-item')
    let testimonialSectionDivideItemWidth = document.getElementById('testimonial-section-divide').offsetWidth / 3
    if(window.innerWidth >= 961 && typeof(testimonialSection) != 'undefined' && testimonialSection != null) {
      Array.from(testimonialSectionDivideItems).forEach(item => {
        item.style.width = testimonialSectionDivideItemWidth + "px"
      })
    }
  }
  render() {
    return (
      <div className={styles.block} id="testimonial-section">
        <div className="container">
          <h2 className="global-hero-glow-white m-0 p-0">Meet the Augmented Recruiters</h2>
          <h4 className="p-0">They build more engaging experiences and increase recruitment outputs through automation and AI</h4>
          <ul className={styles.blockDivide} id="testimonial-section-divide">
            <li className="testimonial-section-divide-item">1</li>
            <li className="testimonial-section-divide-item">2</li>
            <li className="testimonial-section-divide-item">3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AugmentedRecruitersIndexPageSplit
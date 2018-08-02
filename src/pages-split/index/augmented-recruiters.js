import React from 'react'
import styles from './style/augmented-recruiters.module.scss'
import userIcon from './images/augmented-recruiters/user.svg'

class AugmentedRecruitersIndexPageSplit extends React.Component {
  componentDidMount() {
    let testimonialSection = document.getElementById('testimonial-section')
    let testimonialSectionDivideItems = document.getElementsByClassName('testimonial-section-divide-item')
    let testimonialSectionDivideItemWidth = document.getElementById('testimonial-section-divide').offsetWidth / 3
    if (window.innerWidth >= 961 && typeof (testimonialSection) != 'undefined' && testimonialSection != null) {
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

            <li className="testimonial-section-divide-item">
              <div className={styles.blockDivideItemVideo}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className={styles.blockDivideItemDetails}>
                <div className={styles.blockDivideItemDetailsMessage}>
                  We partnered with Talkpush to get ahead on social media, use Facebook as a sourcing channel and drive a faster candidate response time, lowering our cost per hire by 60%.
                </div>
                <div className={styles.blockDivideItemDetailsUser}>
                  <img src={userIcon} className={styles.blockDivideItemDetailsUserPicture} alt="Lorem Ipsum" title="Lorem Ipsum" />
                  <div className={styles.blockDivideItemDetailsUserDetails}>
                    <div className={styles.blockDivideItemDetailsUserDetailsName}>Matthew Johnson</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsPosition}>Global Director</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsCompany}>Valor Global Services</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="testimonial-section-divide-item">
              <div className={styles.blockDivideItemVideo}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className={styles.blockDivideItemDetails}>
                <div className={styles.blockDivideItemDetailsMessage}>
                  We partnered with Talkpush to get ahead on social media, use Facebook as a sourcing channel and drive a faster candidate response time, lowering our cost per hire by 60%.
                </div>
                <div className={styles.blockDivideItemDetailsUser}>
                  <img src={userIcon} className={styles.blockDivideItemDetailsUserPicture} alt="Lorem Ipsum" title="Lorem Ipsum" />
                  <div className={styles.blockDivideItemDetailsUserDetails}>
                    <div className={styles.blockDivideItemDetailsUserDetailsName}>Matthew Johnson</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsPosition}>Global Director</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsCompany}>Valor Global Services</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="testimonial-section-divide-item">
              <div className={styles.blockDivideItemVideo}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className={styles.blockDivideItemDetails}>
                <div className={styles.blockDivideItemDetailsMessage}>
                  We partnered with Talkpush to get ahead on social media, use Facebook as a sourcing channel and drive a faster candidate response time, lowering our cost per hire by 60%.
                </div>
                <div className={styles.blockDivideItemDetailsUser}>
                  <img src={userIcon} className={styles.blockDivideItemDetailsUserPicture} alt="Lorem Ipsum" title="Lorem Ipsum" />
                  <div className={styles.blockDivideItemDetailsUserDetails}>
                    <div className={styles.blockDivideItemDetailsUserDetailsName}>Matthew Johnson</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsPosition}>Global Director</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsCompany}>Valor Global Services</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="testimonial-section-divide-item">
              <div className={styles.blockDivideItemVideo}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className={styles.blockDivideItemDetails}>
                <div className={styles.blockDivideItemDetailsMessage}>
                  We partnered with Talkpush to get ahead on social media, use Facebook as a sourcing channel and drive a faster candidate response time, lowering our cost per hire by 60%.
                </div>
                <div className={styles.blockDivideItemDetailsUser}>
                  <img src={userIcon} className={styles.blockDivideItemDetailsUserPicture} alt="Lorem Ipsum" title="Lorem Ipsum" />
                  <div className={styles.blockDivideItemDetailsUserDetails}>
                    <div className={styles.blockDivideItemDetailsUserDetailsName}>Matthew Johnson</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsPosition}>Global Director</div>
                    <div className={styles.blockDivideItemDetailsUserDetailsCompany}>Valor Global Services</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default AugmentedRecruitersIndexPageSplit
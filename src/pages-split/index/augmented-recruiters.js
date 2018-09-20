import React from 'react'
import styles from './style/augmented-recruiters.module.scss'
import userIcon from './images/augmented-recruiters/user.svg'

class AugmentedRecruitersIndexPageSplit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationWorking: true,
    }
  }
  quoteBlock(videoID, message, name, position, company) {
    return (
      <li className="testimonial-section-divide-item">
        <div className={styles.blockDivideItemVideo}>
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoID} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className={styles.blockDivideItemDetails}>
          <div className={styles.blockDivideItemDetailsMessage}>
            {message}
          </div>
          <div className={styles.blockDivideItemDetailsUser}>
            <img src={userIcon} className={styles.blockDivideItemDetailsUserPicture} alt={name} title={name} />
            <div className={styles.blockDivideItemDetailsUserDetails}>
              <div className={styles.blockDivideItemDetailsUserDetailsName}>{name}</div>
              <div className={styles.blockDivideItemDetailsUserDetailsPosition}>{position}</div>
              <div className={styles.blockDivideItemDetailsUserDetailsCompany}>{company}</div>
            </div>
          </div>
        </div>
      </li>
    )
  }
  componentDidMount() {
    let testimonialSection = document.getElementById('testimonial-section')
    let testimonialSectionDivideItems = document.getElementsByClassName('testimonial-section-divide-item')
    let testimonialSectionDivideItemWidth = document.getElementById('testimonial-section-divide').offsetWidth / 3
    let testimonialSectionDivide = document.getElementById('testimonial-section-divide')
    if (window.innerWidth >= 961 && typeof (testimonialSection) != 'undefined' && testimonialSection != null) {
      Array.from(testimonialSectionDivideItems).forEach(item => {
        item.style.width = testimonialSectionDivideItemWidth + "px"
      })
    }
    testimonialSectionDivide.addEventListener("scroll", () => {
      let factor = testimonialSectionDivide.scrollLeft / (testimonialSectionDivide.scrollWidth - testimonialSectionDivide.offsetWidth);
      if(factor < 0.2) {
        let move = testimonialSectionDivide.lastChild;
        move.remove();
        testimonialSectionDivide.prepend(move);
        testimonialSectionDivide.scrollLeft += move.offsetWidth;
      } else if(factor > 0.9) {
        let move = testimonialSectionDivide.firstChild;
        move.remove();
        testimonialSectionDivide.append(move);
        testimonialSectionDivide.scrollLeft -= move.offsetWidth;
      }
    });
    setInterval(() => {
      if(this.state.animationWorking) testimonialScroll(1);
    }, 5000);
    let testimonialScroll = (speed) => {
      let animateFinishLine = 0;
      let animate = setInterval(() => {
        testimonialSectionDivide.scrollLeft++;
        animateFinishLine++;
        if((testimonialSectionDivide.offsetWidth / 3) <= animateFinishLine) animateStop();
      }, speed);
      let animateStop = () => {
        clearInterval(animate);
      }
    }
  }
  render() {
    return (
      <div className={styles.block} id="testimonial-section">
        <div className="container">
          <h2 className="global-hero-glow-white m-0 p-0">Meet the Augmented Recruiters</h2>
          <h4 className="p-0">They build more engaging experiences and increase recruitment outputs through automation and AI</h4>
          <ul className={styles.blockDivide} id="testimonial-section-divide" onMouseOver={() => this.setState({ animationWorking: false })} onMouseOut={() => this.setState({ animationWorking: true })}>

            {this.quoteBlock("ciSB3gMpH_g", "With Talkpush, our hire rate has gone up considerably and we are able to handle much more volume with our existing team.", "Marvin Vinluan", "Director / Strategic Sourcing / Recruitment Marketing", "Alorica")}
            {this.quoteBlock("abg2U9DuAiA", "I love Talkpush because it allows access to multiple sourcing channels in one platform.", "Ping Sta. Catalina", "Client Services Manager", "Alexander Mann Solutions")}
            {this.quoteBlock("2cj1nKFZQDA", "We partnered with Talkpush to get ahead on social media, use Facebook as a sourcing channel and drive a faster candidate response time, lowering our cost per hire by 60%.", "Matthew Johnson", "Global Director", "Valor Global Services")}
            {this.quoteBlock("Vpu8HkBHShw", "We partnered with Talkpush for a fast and easy recruitment experience, allowing us to engage with twice as many people.", "Lyn Bautista", "Sourcing and Branding Manager", "[24]7.ai")}
            {this.quoteBlock("nFRDqo_rc3o", "We have been using Talkpush since 2014 and it has streamlined our recruitment tremendously. We are able to spend more time with the quality candidates and have increased our interview to hire ratio.", "Keith Cheung", "Head of Talent Acquisition", "Sheraton and St. Regis Macau")}

          </ul>
        </div>
      </div>
    )
  }
}

export default AugmentedRecruitersIndexPageSplit
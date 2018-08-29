import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/jobs.module.scss'
import Modal from '../components/modal'
// import hiringIcon from '../pages-images/jobs/hiring.svg'
// import cultureIcon from '../pages-images/jobs/culture.svg'
// import locationIcon from '../pages-images/jobs/location.svg'
import floatingMessageIcon from '../pages-images/jobs/floating-message.svg'

class JobsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false
    }
  }

  openModal = (e) => {
    e.preventDefault();
    document.getElementsByTagName("body")[0].classList.add("noScroll")
    this.setState({
      modalStatus: true
    })
  }

  closeModal = (e) => {
    e.preventDefault();
    document.getElementsByTagName("body")[0].classList.remove("noScroll")
    this.setState({
      modalStatus: false
    })
  }

  pageVariables = {
    pageCode: 'jobs',
    pageDescription: 'Ready to accelerate recruitment? Talkpush is the leading productivity platform and the most high-volume chatbot for hiring talent via Facebook, WeChat and messaging.',
    pageTitle: 'Jobs',
  }

  componentDidMount() {
    let botScrollFunction = () => window.scrollTo(0, document.body.scrollHeight)
    let talkpushFrame = document.getElementById("talkpush-bot-iframe")
    let talkpushFrameContent = talkpushFrame.contentWindow
    let setTalkpushFrameHeight = () => talkpushFrame.style.height = talkpushFrameContent.document.body.scrollHeight + "px"

    talkpushFrameContent.botOnReceive = () => {
      setTalkpushFrameHeight()
      botScrollFunction()
    }
    talkpushFrameContent.botOnSend = () => {
      setTalkpushFrameHeight()
      botScrollFunction()
    }

    document.getElementsByTagName("footer")[0].style.display = "none"
  }

  componentWillUnmount() {
    document.getElementsByTagName("footer")[0].style.display = "block"
  }

  render() {
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{this.pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        {this.state.modalStatus ? <Modal closeModal={this.closeModal} type="gallery" maxWidth="800" title="Office Life" content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." /> : null}
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderMessageIcon}>
            <img src={floatingMessageIcon} alt="Floating Message"/>
          </div>
          <div className={styles.blockHeaderContent}>
            <div className={styles.blockHeaderContentFill}></div>
            <h1 className="global-hero-glow-white p-0 m-0">We're Hiring</h1>
            <p className="p-0">Thinking about working at Talkpush? We want to learn more about you so we can decide if there is a potential career for you at Talkpush. Talk to our recruitment agent Stanley below and start that conversation NOW.</p>
            <div className={styles.blockHeaderContentLink}>
              <a href="#" onClick={this.openModal} className="global-button">
                <i className="fa fa-users fa-fw" aria-hidden="true"></i>
                <span>Hiring Process</span>
              </a>
              <a href="#" onClick={this.openModal} className="global-button">
                <i className="fa fa-coffee fa-fw" aria-hidden="true"></i>
                <span>Our Culture</span>
              </a>
              <a href="#" onClick={this.openModal} className="global-button">
                <i className="fa fa-globe fa-fw" aria-hidden="true"></i>
                <span>Our Locations</span>
              </a>
            </div>
            <div className={styles.blockHeaderContentFill}></div>
          </div>
        </div>
        <div className={styles.blockChat}>
          <div className="container">
            <div className={styles.blockChatNotice}>Talk to our recruitment team below</div>
            <iframe src="/talkpush-bot/index.html" style={{ width: '100%', minHeight: '300px' }} scrolling="no" frameBorder="0" id="talkpush-bot-iframe"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default JobsPage

import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/jobs.module.scss'

class JobsPage extends React.Component {
  pageVariables = {
    pageCode: 'jobs',
    pageDescription: 'Ready to accelerate recruitment? Talkpush is the leading productivity platform and the most high-volume chatbot for hiring talent via Facebook, WeChat and messaging.',
  }

  componentDidMount() {
    let botScrollFunction = () => window.scrollTo(0, document.body.scrollHeight)
    let talkpushFrame = document.getElementById("talkpush-bot-iframe")
    let talkpushFrameContent = talkpushFrame.contentWindow

    talkpushFrameContent.botOnReceive = () => {
      talkpushFrame.style.height = talkpushFrameContent.document.body.scrollHeight + "px"
      botScrollFunction()
    }
    talkpushFrameContent.botOnSend = () => {
      talkpushFrame.style.height = talkpushFrameContent.document.body.scrollHeight + "px"
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
          <title>{this.pageVariables.pageCode}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderContent}>
            <div className={styles.blockHeaderContentFill}></div>
            <h1 className="global-hero-glow-white p-0 m-0">We're Hiring</h1>
            <p className="p-0">Thinking about working at Talkpush? We want to learn more about you so we can decide if there is a potential career for you at Talkpush. Talk to our recruitment agent Stanley below and start that conversation NOW.</p>
            <div className={styles.blockHeaderContentFill}></div>
          </div>
        </div>
        <iframe src="/talkpush-bot/index.html" style={{ width: '100%' }} scrolling="no" frameBorder="0" id="talkpush-bot-iframe"></iframe>
      </div>
    )
  }
}

export default JobsPage

import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/chatbot.module.scss'
import logoIcon from '../pages-images/chatbot/logo.svg'

class ChatbotPage extends React.Component {
  pageVariables = {
    pageCode: 'chatbot',
    pageDescription: 'Our chatbots creates Augmented Recruiters by automating every recruitment step from scheduling interviews, to collecting referrals, to onboarding new hires.',
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
          <title>{this.pageVariables.pageCode}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderContent}>
            <div className="container">
              <h1 className="global-hero-glow-white">Conversational agents that<br />augment recruiters</h1>
            </div>
          </div>
        </div>
        <div className={styles.blockChat}>
          <div className="container">
            <div className={styles.blockChatLogo}>
              <img src={logoIcon} alt="Logo"/>
            </div>
            <div className={styles.blockChatTitle}>Talk to the bot</div>
            <div className={styles.blockChatMessage}>Feel free to ask Stanley our FAQ bot any question you may have about how to use conversational intelligence in your recruitment process:</div>
            <div className={styles.blockChatNotice}>Talk to Stanley below</div>
            <iframe src="/talkpush-bot/index.html" style={{ width: '100%', minHeight: '300px' }} scrolling="no" frameBorder="0" id="talkpush-bot-iframe"></iframe>
          </div>
        </div>
      </div>

    )
  }
}

export default ChatbotPage

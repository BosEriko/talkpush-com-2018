import React from 'react'
import styles from './style/talk-to-your-candidate.module.scss'
import chatbotIcon from '../../icons/chatbot-white.svg'
import crmIcon from '../../icons/crm-white.svg'

const TalkToYourCandidateIndexPageSplit = () => (
  <div className={styles.block}>
    <div className={styles.fillLeft}></div>
    <div className={styles.content}>
      <div className={styles.contentLeft}>
      {/* Content Start */}
        <div className={styles.contentLeftContent}>
          <h1 className="global-hero-glow-white text-uppercase m-0 p-0">Talk To Your</h1>
          <h1 className="global-hero-glow-green text-uppercase m-0 p-0">Candidate</h1>
          <p>Recruiting is pretty simple: get your recruiters and your candidates to talk to each other and watch good things happen. Talkpush is the first conversation-driven Candidate Relationship Management (CRM) system. On Talkpush, recruiters spend more time talking to qualified candidates, which translates into a better candidate experience and huge reductions in cost-per-hire and time-to-fill.</p>
          <div className={styles.bigButtonHolder}><a href="#Request" className="global-button"><i className="fa fa-send-o fa-fw" aria-hidden="true"></i>Request a Demo</a></div>
          <div className={styles.otherButtonHolder}>
            <a href="#Discover" className="global-button"><img src={crmIcon} alt="CRM" />Discover our CRM Features</a>
            <a href="#Check" className="global-button"><img src={chatbotIcon} alt="Chatbot" />Check our Chatbot</a>
          </div>
        </div>
      {/* Content End */}
      </div>
      <div className={styles.contentRight}></div>
    </div>
    <div className={styles.fillRight}></div>
  </div>
)

export default TalkToYourCandidateIndexPageSplit
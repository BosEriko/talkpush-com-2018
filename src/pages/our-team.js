import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/our-team.module.scss'
import defaultPicture from '../pages-images/our-team/default.png'
import Link from 'gatsby-link'
import Modal from '../components/modal'

import yuanPicture from '../pages-images/our-team/people/yuan.jpeg'

const pageVariables = {
  pageCode: 'our-team',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
  pageTitle: 'Our Team',
}

class OurTeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
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
  RowItem = () => {
    return (
      <div className={styles.blockTeamMembersRowItem}>
        <div className={styles.blockTeamMembersRowItemImage}>
          <img src={defaultPicture} alt="Default" />
        </div>
        <h4 className="m-0 p-0">Name of Employee</h4>
        <span>Current Position</span>
        <a href="#" onClick={this.openModal} className="global-button text-lowercase">Read More</a>
      </div>
    )
  }
  render() {
    const { RowItem } = this;
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={pageVariables.pageDescription} />
          <meta property='og:description' content={pageVariables.pageDescription} />
        </Helmet>
        {this.state.modalStatus && <Modal closeModal={this.closeModal} maxWidth="400" title={"title"} content={"content"} />}
        <div className={styles.blockHeader}></div>
        <div className={styles.blockExperiences}>
          <div className="container">
            <h2 className="global-hero-glow-white m-0 p-0" style={{ textShadow: "0 0 20px #e800ff" }}>Meet Yuan</h2>
            <div className={styles.blockExperiencesDivider}>
              <div className={styles.blockExperiencesDividerLeft}>
                <div className={styles.blockExperiencesDividerLeftImage}>
                  <img src={yuanPicture} alt="Yuan" />
                </div>
              </div>
              <div className={styles.blockExperiencesDividerRight}>
                {/* <div className={styles.blockExperiencesDividerRightNamePosition}>
                  <h3 className="global-hero-glow-green m-0 p-0">Yuan Yim</h3>
                  <span>Head of Resource and Community</span>
                </div> */}
                <p className="m-0">I have always wanted to show people what it’s like to work for a company like ours and to share my experience of the start-up adventure, so I’ve put together this vlog, which I hope you’ll get some inspiration from and maybe even get you excited about exploring career opportunities at Talkpush.</p>
                <div className={styles.blockExperiencesDividerRightReadMore}>
                  <Link to="/our-team/yuan" className="global-button text-lowercase">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockTeam}>
          <div className="container">
            <h2 className="global-hero-glow-green m-0 p-0" style={{ textShadow: 'none' }}>Meet the team</h2>
            <div className={styles.blockTeamMembers}>
              <div className={styles.blockTeamMembersRow}>
                <RowItem />
                <RowItem />
                <RowItem />
              </div>
              <div className={styles.blockTeamMembersRow}>
                <RowItem />
                <RowItem />
                <RowItem />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockJoin}>
          <div className="container">
            <div className={styles.blockJoinBox}>
              <div className={styles.blockJoinBoxDetails}>
                <h3>Join our growing team</h3>
                <p className="m-0 p-0">Join Talkpush and let's make recruitment fun together</p>
                <Link to="/jobs">Careers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OurTeamPage

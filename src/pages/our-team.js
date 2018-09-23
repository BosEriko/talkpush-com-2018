import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/our-team.module.scss'
import defaultPicture from '../pages-images/our-team/default.png'
import Link from 'gatsby-link'
import Modal from '../components/modal'

import yuanPicture from '../pages-images/our-team/people/yuan.jpeg'
import bosPicture from '../pages-images/our-team/people/bos.jpeg'

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
      modalUserName: "",
      modalUserTitle: "",
      modalUserDescription: "",
      modalUserImage: ""
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
  RowItem = ({ name, title, description, image }) => {
    return (
      <div className={styles.blockTeamMembersRowItem} onClick={() => this.setState({ modalUserName: name, modalUserTitle: title, modalUserDescription: description, modalUserImage: image })}>
        <div className={styles.blockTeamMembersRowItemImage}>
          <img src={image} alt="Default" />
        </div>
        <h4 className="m-0 p-0">{name}</h4>
        <span>{title}</span>
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
        {this.state.modalStatus && <Modal closeModal={this.closeModal} maxWidth="500" name={this.state.modalUserName} position={this.state.modalUserTitle} content={this.state.modalUserDescription} profilePicture={this.state.modalUserImage} />}
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
                <RowItem name="Bos Eriko Reyes" title="Designer" image={bosPicture} description="Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts." />
                <RowItem name="Bos Eriko Reyes" title="Designer" image={bosPicture} description="Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts." />
                <RowItem name="Bos Eriko Reyes" title="Designer" image={bosPicture} description="Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts." />
              </div>
              <div className={styles.blockTeamMembersRow}>
                <RowItem name="Bos Eriko Reyes" title="Designer" image={bosPicture} description="Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts." />
                <RowItem name="Bos Eriko Reyes" title="Designer" image={bosPicture} description="Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts." />
                <RowItem name="Bos Eriko Reyes" title="Designer" image={bosPicture} description="Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts." />
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

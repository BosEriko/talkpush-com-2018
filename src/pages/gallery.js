import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Modal from '../components/modal'
import styles from '../pages-style/gallery.module.scss'
import joinIcon from '../pages-images/gallery/join-icon.svg'
// import heartIcon from '../pages-images/gallery/heart.svg'

import recHackFive001 from '../pages-images/gallery/albums/recruitment-hacks-5/001.jpg';
import recHackFive002 from '../pages-images/gallery/albums/recruitment-hacks-5/002.jpg';
import recHackFive003 from '../pages-images/gallery/albums/recruitment-hacks-5/003.jpg';
import recHackFive004 from '../pages-images/gallery/albums/recruitment-hacks-5/004.jpg';
import recHackFive005 from '../pages-images/gallery/albums/recruitment-hacks-5/005.jpg';
import recHackFive006 from '../pages-images/gallery/albums/recruitment-hacks-5/006.jpg';
import recHackFive007 from '../pages-images/gallery/albums/recruitment-hacks-5/007.jpg';
import recHackFive008 from '../pages-images/gallery/albums/recruitment-hacks-5/008.jpg';
import recHackFive009 from '../pages-images/gallery/albums/recruitment-hacks-5/009.jpg';
import recHackFive010 from '../pages-images/gallery/albums/recruitment-hacks-5/010.jpg';
import recHackFive011 from '../pages-images/gallery/albums/recruitment-hacks-5/011.jpg';
import recHackFive012 from '../pages-images/gallery/albums/recruitment-hacks-5/012.jpg';
import recHackFive013 from '../pages-images/gallery/albums/recruitment-hacks-5/013.jpg';
import recHackFive014 from '../pages-images/gallery/albums/recruitment-hacks-5/014.jpg';
import recHackFive015 from '../pages-images/gallery/albums/recruitment-hacks-5/015.jpg';

import recHackSix001 from '../pages-images/gallery/albums/recruitment-hacks-6/001.jpg';
import recHackSix002 from '../pages-images/gallery/albums/recruitment-hacks-6/002.jpg';
import recHackSix003 from '../pages-images/gallery/albums/recruitment-hacks-6/003.jpg';
import recHackSix004 from '../pages-images/gallery/albums/recruitment-hacks-6/004.jpg';
import recHackSix005 from '../pages-images/gallery/albums/recruitment-hacks-6/005.jpg';
import recHackSix006 from '../pages-images/gallery/albums/recruitment-hacks-6/006.jpg';
import recHackSix007 from '../pages-images/gallery/albums/recruitment-hacks-6/007.jpg';
import recHackSix008 from '../pages-images/gallery/albums/recruitment-hacks-6/008.jpg';
import recHackSix009 from '../pages-images/gallery/albums/recruitment-hacks-6/009.jpg';
import recHackSix010 from '../pages-images/gallery/albums/recruitment-hacks-6/010.jpg';
import recHackSix011 from '../pages-images/gallery/albums/recruitment-hacks-6/011.jpg';
import recHackSix012 from '../pages-images/gallery/albums/recruitment-hacks-6/012.jpg';
import recHackSix013 from '../pages-images/gallery/albums/recruitment-hacks-6/013.jpg';
import recHackSix014 from '../pages-images/gallery/albums/recruitment-hacks-6/014.jpg';
import recHackSix015 from '../pages-images/gallery/albums/recruitment-hacks-6/015.jpg';

import recHackSeven001 from '../pages-images/gallery/albums/recruitment-hacks-7/001.jpg';
import recHackSeven002 from '../pages-images/gallery/albums/recruitment-hacks-7/002.jpg';
import recHackSeven003 from '../pages-images/gallery/albums/recruitment-hacks-7/003.jpg';
import recHackSeven004 from '../pages-images/gallery/albums/recruitment-hacks-7/004.jpg';
import recHackSeven005 from '../pages-images/gallery/albums/recruitment-hacks-7/005.jpg';
import recHackSeven006 from '../pages-images/gallery/albums/recruitment-hacks-7/006.jpg';
import recHackSeven007 from '../pages-images/gallery/albums/recruitment-hacks-7/007.jpg';
import recHackSeven008 from '../pages-images/gallery/albums/recruitment-hacks-7/008.jpg';
import recHackSeven009 from '../pages-images/gallery/albums/recruitment-hacks-7/009.jpg';
import recHackSeven010 from '../pages-images/gallery/albums/recruitment-hacks-7/010.jpg';
import recHackSeven011 from '../pages-images/gallery/albums/recruitment-hacks-7/011.jpg';
import recHackSeven012 from '../pages-images/gallery/albums/recruitment-hacks-7/012.jpg';
import recHackSeven013 from '../pages-images/gallery/albums/recruitment-hacks-7/013.jpg';
import recHackSeven014 from '../pages-images/gallery/albums/recruitment-hacks-7/014.jpg';
import recHackSeven015 from '../pages-images/gallery/albums/recruitment-hacks-7/015.jpg';

import talkpush2018AnnualOffsite001 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/001.jpg';
import talkpush2018AnnualOffsite002 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/002.jpg';
import talkpush2018AnnualOffsite003 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/003.jpg';
import talkpush2018AnnualOffsite004 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/004.jpg';
import talkpush2018AnnualOffsite005 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/005.jpg';
import talkpush2018AnnualOffsite006 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/006.jpg';
import talkpush2018AnnualOffsite007 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/007.jpg';
import talkpush2018AnnualOffsite008 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/008.jpg';
import talkpush2018AnnualOffsite009 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/009.jpg';
import talkpush2018AnnualOffsite010 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/010.jpg';
import talkpush2018AnnualOffsite011 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/011.jpg';
import talkpush2018AnnualOffsite012 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/012.jpg';
import talkpush2018AnnualOffsite013 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/013.jpg';
import talkpush2018AnnualOffsite014 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/014.jpg';
import talkpush2018AnnualOffsite015 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/015.jpg';

import talkpushWorkshopOne001 from '../pages-images/gallery/albums/talkpush-workshop-1/001.jpg';
import talkpushWorkshopOne002 from '../pages-images/gallery/albums/talkpush-workshop-1/002.jpg';
import talkpushWorkshopOne003 from '../pages-images/gallery/albums/talkpush-workshop-1/003.jpg';
import talkpushWorkshopOne004 from '../pages-images/gallery/albums/talkpush-workshop-1/004.jpg';
import talkpushWorkshopOne005 from '../pages-images/gallery/albums/talkpush-workshop-1/005.jpg';
import talkpushWorkshopOne006 from '../pages-images/gallery/albums/talkpush-workshop-1/006.jpg';
import talkpushWorkshopOne007 from '../pages-images/gallery/albums/talkpush-workshop-1/007.jpg';
import talkpushWorkshopOne008 from '../pages-images/gallery/albums/talkpush-workshop-1/008.jpg';
import talkpushWorkshopOne009 from '../pages-images/gallery/albums/talkpush-workshop-1/009.jpg';
import talkpushWorkshopOne010 from '../pages-images/gallery/albums/talkpush-workshop-1/010.jpg';
import talkpushWorkshopOne011 from '../pages-images/gallery/albums/talkpush-workshop-1/011.jpg';
import talkpushWorkshopOne012 from '../pages-images/gallery/albums/talkpush-workshop-1/012.jpg';
import talkpushWorkshopOne013 from '../pages-images/gallery/albums/talkpush-workshop-1/013.jpg';
import talkpushWorkshopOne014 from '../pages-images/gallery/albums/talkpush-workshop-1/014.jpg';
import talkpushWorkshopOne015 from '../pages-images/gallery/albums/talkpush-workshop-1/015.jpg';

import talkpushWorkshopTwo001 from '../pages-images/gallery/albums/talkpush-workshop-2/001.jpg';
import talkpushWorkshopTwo002 from '../pages-images/gallery/albums/talkpush-workshop-2/002.jpg';
import talkpushWorkshopTwo003 from '../pages-images/gallery/albums/talkpush-workshop-2/003.jpg';
import talkpushWorkshopTwo004 from '../pages-images/gallery/albums/talkpush-workshop-2/004.jpg';
import talkpushWorkshopTwo005 from '../pages-images/gallery/albums/talkpush-workshop-2/005.jpg';
import talkpushWorkshopTwo006 from '../pages-images/gallery/albums/talkpush-workshop-2/006.jpg';
import talkpushWorkshopTwo007 from '../pages-images/gallery/albums/talkpush-workshop-2/007.jpg';
import talkpushWorkshopTwo008 from '../pages-images/gallery/albums/talkpush-workshop-2/008.jpg';
import talkpushWorkshopTwo009 from '../pages-images/gallery/albums/talkpush-workshop-2/009.jpg';
import talkpushWorkshopTwo010 from '../pages-images/gallery/albums/talkpush-workshop-2/010.jpg';
import talkpushWorkshopTwo011 from '../pages-images/gallery/albums/talkpush-workshop-2/011.jpg';
import talkpushWorkshopTwo012 from '../pages-images/gallery/albums/talkpush-workshop-2/012.jpg';
import talkpushWorkshopTwo013 from '../pages-images/gallery/albums/talkpush-workshop-2/013.jpg';
import talkpushWorkshopTwo014 from '../pages-images/gallery/albums/talkpush-workshop-2/014.jpg';
import talkpushWorkshopTwo015 from '../pages-images/gallery/albums/talkpush-workshop-2/015.jpg';


class GalleryPage extends React.Component {
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
    pageCode: 'gallery',
    pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
    activeLink: {
      color: '#72de2f',
      textShadow: '0 0 10px #72de2f'
    },
    pageTitle: 'Gallery',
  }

  galleryItem = (image, name, description) => {
    return (
      <li className={styles.blockContentGalleryRowItem}>
        <div className={styles.blockContentGalleryRowItemImage}>
          <a href="#" onClick={this.openModal}>
            <div style={{ backgroundImage: `url('${image}')` }}></div>
          </a>
        </div>
        <div className={styles.blockContentGalleryRowItemName}>
          <a href="#" onClick={this.openModal}>
            <h3 className="m-0 p-0">{name}</h3>
          </a>
          {/* <div className={styles.blockContentGalleryRowItemNameHeart}>
            <img src={heartIcon} alt="Heart Icon" />
          </div> */}
        </div>
        <p className={styles.blockContentGalleryRowItemDescription}>{description}</p>
      </li>
    )
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
        <div className={styles.blockHeader}></div>
        <div className={styles.blockContent}>
          <div className="container">
            <h3 className="global-hero-glow-white m-0 p-0">Galleries</h3>
            <div className={styles.blockContentMenuSearch}>
              <ul className="m-0 p-0">
                <li className="m-0 p-0"><a href="#" style={this.pageVariables.activeLink}>Our Team</a></li>
                {/* <li className="m-0 p-0"><a href="#">Our Events</a></li> */}
              </ul>
              {/* <input type="text" placeholder="Search" /> */}
            </div>
            <div className={styles.blockContentGallery}>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem(recHackFive014, "Recruitment Hack 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(recHackSix005, "Recruitment Hack 6", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(recHackSeven006, "Recruitment Hack 7", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
              </ul>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem(talkpush2018AnnualOffsite014, "Talkpush Annual Offsite 2018", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(talkpushWorkshopOne001, "Talkpush Workshop 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(talkpushWorkshopTwo008, "Talkpush Workshop 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
              </ul>
            </div>
            <div className={styles.blockContentJoin}>
              <div className={styles.blockContentJoinIcon}>
                <img src={joinIcon} alt="Join Us" />
              </div>
              <div className={styles.blockContentJoinDetails}>
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

export default GalleryPage

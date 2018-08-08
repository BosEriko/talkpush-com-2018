import React from 'react'
import Helmet from 'react-helmet'
import Modal from '../components/modal'
import styles from '../pages-style/gallery.module.scss'
import joinIcon from '../pages-images/gallery/join-icon.svg'
import heartIcon from '../pages-images/gallery/heart.svg'

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
    }
  }

  galleryItem = (image, name, description) => {
    return (
      <li className={styles.blockContentGalleryRowItem}>
        <div className={styles.blockContentGalleryRowItemImage}>
          <a href="#" onClick={this.openModal}>
            <img src={image} alt="Blank Image" />
          </a>
        </div>
        <div className={styles.blockContentGalleryRowItemName}>
          <a href="#" onClick={this.openModal}>
            <h3 className="m-0 p-0">{name}</h3>
          </a>
          <div className={styles.blockContentGalleryRowItemNameHeart}>
            <img src={heartIcon} alt="Heart Icon" />
          </div>
        </div>
        <p className={styles.blockContentGalleryRowItemDescription}>{description}</p>
      </li>
    )
  }

  render() {
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{this.pageVariables.pageCode}</title>
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
                <li className="m-0 p-0"><a href="#">Our Events</a></li>
              </ul>
              <input type="text" placeholder="Search" />
            </div>
            <div className={styles.blockContentGallery}>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
              </ul>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
              </ul>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem("/og-image.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
              </ul>
            </div>
            <div className={styles.blockContentJoin}>
              <div className={styles.blockContentJoinIcon}>
                <img src={joinIcon} alt="Join Us" />
              </div>
              <div className={styles.blockContentJoinDetails}>
                <h3>Join our growing team</h3>
                <p className="m-0 p-0">Join Talkpush and let's make recruitment fun together</p>
                <a href="#">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryPage

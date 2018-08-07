import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/gallery.module.scss'
import joinIcon from '../pages-images/gallery/join-icon.svg'
import heartIcon from '../pages-images/gallery/heart.svg'

const pageVariables = {
  pageCode: 'gallery',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
  activeLink: {
    color: '#72de2f',
    textShadow: '0 0 10px #72de2f'
  }
}

const galleryItem = (image, name, description) => {return(
  <li className={styles.blockContentGalleryRowItem}>
    <div className={styles.blockContentGalleryRowItemImage}>
      <a href="#">
        <img src={image} alt="Blank Image" />
      </a>
    </div>
    <div className={styles.blockContentGalleryRowItemName}>
      <a href="#">
        <h3 className="m-0 p-0">{name}</h3>
      </a>
      <div className={styles.blockContentGalleryRowItemNameHeart}>
        <img src={heartIcon} alt="Heart Icon" />
      </div>
    </div>
    <p className={styles.blockContentGalleryRowItemDescription}>{description}</p>
  </li>
)}

const GalleryPage = () => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}></div>
    <div className={styles.blockContent}>
      <div className="container">
        <h3 className="global-hero-glow-white m-0 p-0">Galleries</h3>
        <div className={styles.blockContentMenuSearch}>
          <ul className="m-0 p-0">
            <li className="m-0 p-0"><a href="#" style={pageVariables.activeLink}>Our Team</a></li>
            <li className="m-0 p-0"><a href="#">Our Events</a></li>
          </ul>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.blockContentGallery}>
          <ul className={styles.blockContentGalleryRow}>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
            <div className={styles.blockContentGalleryRowSpacing}></div>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
            <div className={styles.blockContentGalleryRowSpacing}></div>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
          </ul>
          <ul className={styles.blockContentGalleryRow}>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
            <div className={styles.blockContentGalleryRowSpacing}></div>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
            <div className={styles.blockContentGalleryRowSpacing}></div>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
          </ul>
          <ul className={styles.blockContentGalleryRow}>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
            <div className={styles.blockContentGalleryRowSpacing}></div>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
            <div className={styles.blockContentGalleryRowSpacing}></div>
            {galleryItem("https://i.pximg.net/img-master/img/2018/08/05/00/33/28/70023304_p0_master1200.jpg", "Office Life", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
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

export default GalleryPage

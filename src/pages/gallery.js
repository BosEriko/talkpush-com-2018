import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/gallery.module.scss'

const pageVariables = {
  pageCode: 'Gallery',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
}

const GalleryPage = () => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}></div>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default GalleryPage

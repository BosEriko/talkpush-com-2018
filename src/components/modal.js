import React from 'react'
import styles from './style/modal.module.scss'

class Modal extends React.Component {
  render() {
    const { closeModal, maxWidth, middleIcon, title, type, content } = this.props;
    return (
      <div className={styles.block}>
        <div className={styles.blockFilter} onClick={closeModal}></div>
        <div className={styles.blockHolder}>
          <div style={{ maxWidth: maxWidth + 'px' }} className={styles.blockHolderBox}>
            <a href="#" className={styles.blockHolderBoxClose} onClick={closeModal}>
              <i className="fa fa-times fa-fw" aria-hidden="true"></i>
            </a>
            { middleIcon && <div className={styles.blockHolderBoxIcon}><img src={middleIcon} /></div> }
            { title && <h3 className="global-hero-glow-white m-0 p-0">{title}</h3> }
            <div className={styles.blockHolderBoxContent}>{content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
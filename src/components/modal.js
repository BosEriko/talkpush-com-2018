import React from 'react'
import styles from './style/modal.module.scss'

class Modal extends React.Component {
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.blockFilter} onClick={this.props.closeModal}></div>
        <div className={styles.blockHolder}>
          <div style={{ maxWidth: this.props.maxWidth + 'px' }} className={styles.blockHolderBox}>
            <a href="#" className={styles.blockHolderBoxClose} onClick={this.props.closeModal}>
              <i className="fa fa-times fa-fw" aria-hidden="true"></i>
            </a>
            <h3 className="global-hero-glow-white m-0 p-0">{this.props.title}</h3>
            {this.props.type === "gallery" ?
              <div>
                <p className="p-0 m-0">{this.props.content}</p>
              </div>
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
import React, { Component } from 'react';

import styles from './IntroductionSideBar.module.css';

import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'


class KimiNoNaWaBackgroundVideo extends Component {
  render() {
    return (
      <div className={styles.SideBarContainer} >
        <div className={styles.ContentContainer} >
          <div className={styles.stars} id="stars"></div>
          <div className={styles.stars2} id="stars2"></div>
          <div className={styles.stars3} id="stars3"></div>
          <img src="../../assets/chips.gif" />
          <div className={styles.title} id="title">
            <span>
              Isabella Pham
            </span>
          </div>
          <SocialMediaIcons />
        </div>
      </div>
    );
  }
}

export default KimiNoNaWaBackgroundVideo
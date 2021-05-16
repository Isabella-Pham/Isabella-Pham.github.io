import React, { Component } from 'react';

import styles from './IntroductionSideBar.module.css';

import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'


class KimiNoNaWaBackgroundVideo extends Component {
  render() {
    return (
      <div className={styles.SideBarContainer} >
        <div className={styles.ContentContainer} >
          <img src="../../assets/chips.gif" />
          <h1 className={styles.IntroductionSideBar}>isabella pham</h1>
          <h2 className={styles.IntroductionSideBar}>i write code</h2>
          <SocialMediaIcons />
        </div>
      </div>
    );
  }
}

export default KimiNoNaWaBackgroundVideo
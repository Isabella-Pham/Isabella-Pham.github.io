import React, { Component } from 'react';

import styles from '../style/home.css';
import KimiNoNaWaBackgroundVideo from '../components/KimiNoNaWaBackgroundVideo/KimiNoNaWaBackgroundVideo'
import IntroductionSideBar from '../components/IntroductionSideBar/IntroductionSideBar'

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
  			<KimiNoNaWaBackgroundVideo />
        <IntroductionSideBar />
      </div>
    );
  }
}

export default Home;

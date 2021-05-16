import React, { Component } from 'react';

import styles from './KimiNoNaWaBackgroundVideo.module.css';

class KimiNoNaWaBackgroundVideo extends Component {
  render() {
    const videoSource = "assets/kimiNoNaWa.mp4";
    return (
      <div className={styles.Container} >
        <video autoPlay muted loop className={styles.Video} >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default KimiNoNaWaBackgroundVideo

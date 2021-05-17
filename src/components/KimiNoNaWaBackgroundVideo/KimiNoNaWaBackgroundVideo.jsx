import React, { Component } from 'react';

import styles from './KimiNoNaWaBackgroundVideo.module.css';

class KimiNoNaWaBackgroundVideo extends Component {
  render() {
    var videoSource = "assets/kimiNoNaWa.mp4";
    //iOS is really buggy with playsinline and webkit-playsinline
    // and may play the background video in full screen
    if(window.screen.width < 500){
      videoSource = "";
    }

    return (
      <div className={styles.Container} >
        <video src={videoSource} autoPlay muted loop playsinline webkit-playsinline className={styles.Video}>
            Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default KimiNoNaWaBackgroundVideo

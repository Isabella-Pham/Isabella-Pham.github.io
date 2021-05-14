import React, { Component } from 'react';

import '../style/home.css';
import KimiNoNaWaBackgroundVideo from '../components/KimiNoNaWaBackgroundVideo/KimiNoNaWaBackgroundVideo'
import IntroductionSideBar from '../components/IntroductionSideBar/IntroductionSideBar'

class Home extends Component {
  render() {
    return (
      <div>
  			<KimiNoNaWaBackgroundVideo />
        <IntroductionSideBar />
      </div>
    );
  }
}

export default Home;

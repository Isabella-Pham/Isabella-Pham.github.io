import React, { Component } from 'react';

import '../style/about.css';

//TODO: debug github 404 issue on refresh

class About extends Component {
  render() {
    return (
      <div class="about">
        <body class="about">
          <p class="about">
            i'll format this page at some point i've been busy lately :( <br/>
            <b>anime</b>: castlevania, oddTaxi <br/>
            <b>manga</b>: berserk, attack on titan, wotakoi, yona of the dawn, my hero academia <br/>
            <b>food</b>: hotpot, kbbq, sushi, pho <br/>
            <b>games</b>: genshin impact,
              fortnite (check out this sick <a href="https://drive.google.com/file/d/1R8tOWS1zkzoSA25F-UyEF7tm7iEAsJXu/view?usp=sharing" target="_blank"> quickscope</a> i made),
              league of legends, alchemist code, puzzle and dragons <br/>
            <b>sports</b>: badminton <br/>
            <b>pham puns</b>: PHAMtastic, PHAMily, maPHAMatics, PHAMiliar, PHAMous, paralleloPHAM, PHAMine, dePHAMation <br/>
            <b>skincare</b>: innisfree face mask, elizavecca hell-pore mask, mamonde rose water toner, innisfree green tea serum <br/>
            <b>picture of me</b>: <br/>
            <img class="about" src="assets/selfie.jpg" alt="picture of my face"/>
          </p>
        </body>
      </div>
    );
  }
}

export default About;
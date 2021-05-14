import React, { Component } from 'react';
import styles from '../style/credits.css';

class Credits extends Component {
  render() {
    var creditList = require('./credits.json')['credits'];
    return (
      <div className={styles.Container}>
        creditList
      </div>
    );
  }
}

export default Credits;

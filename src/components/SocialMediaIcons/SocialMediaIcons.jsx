import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from './SocialMediaIcons.module.css';

library.add(fab)

class SocialMediaIcons extends Component {
  render() {
    return (
      <div>
        <div className={styles.socialMediaIconsContainer}>
          <ul className={styles.socialMediaIcons}>

            <li className={styles.socialMediaIcons}>
                <a className={styles.socialMediaIcons} href="mailto:isabella.aivy.pham@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>

            <li className={styles.socialMediaIcons}>
                <a className={styles.socialMediaIcons} href="https://www.linkedin.com/in/isabella-pham1/" target="_blank">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </li>

            <li className={styles.socialMediaIcons}>
                <a className={styles.socialMediaIcons} href="https://github.com/Isabella-Pham" target="_blank">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            </li>

            <li className={styles.socialMediaIcons}>
                <a className={styles.socialMediaIcons} href="https://medium.com/phamiliarizing-myself-with-computer-science" target="_blank">
                      <FontAwesomeIcon icon={['fab', 'medium']} />
                </a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default SocialMediaIcons;
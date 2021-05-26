import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from './SocialMediaIcons.module.css';

library.add(fab)

/* Code below is inspired by https://codingnepalweb.com/glowing-social-media-icons-html-css/ */
class SocialMediaIcons extends Component {
  render() {
    return (
      <div>
        <div className={styles.socialMediaIconsContainer}>
          <ul className={styles.socialMediaIcons}>

            <li className={styles.socialMediaIcons}>
              <a className={styles.socialMediaIcons} href="mailto:isabella.aivy.pham@gmail.com">
                <div className={styles.tooltip}>
                      <FontAwesomeIcon icon={faEnvelope} />
                  <span className={styles.tooltiptext}>isabella.aivy.pham@gmail.com</span>
                </div>
              </a>
            </li>

            <li className={styles.socialMediaIcons}>
              <a className={styles.socialMediaIcons} href="https://www.linkedin.com/in/isabella-pham1/" target="_blank">
                <div className={styles.tooltip}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  <span className={styles.tooltiptext}>in/isabella-pham1</span>
                </div>
              </a>
            </li>

            <li className={styles.socialMediaIcons}>
              <a className={styles.socialMediaIcons} href="https://github.com/Isabella-Pham" target="_blank">
                <div className={styles.tooltip}>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                  <span className={styles.tooltiptext}>Isabella-Pham</span>
                </div>
              </a>
            </li>

            <li className={styles.socialMediaIcons}>
              <a className={styles.socialMediaIcons} href="https://medium.com/phamiliarizing-myself-with-computer-science" target="_blank">
                <div className={styles.tooltip}>
                        <FontAwesomeIcon icon={['fab', 'medium']} />

                  <span className={styles.tooltiptext}>Phamiliarizing Myself with Computer Science</span>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default SocialMediaIcons;
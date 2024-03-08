import React from 'react';
import styles from "./Experience.module.css"

import JS from '../../../src/Assets/Skills/js.png';
import Swift from '../../../src/Assets/Skills/swift.png';

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My <span>Experience</span></h2>
      <div className={styles.content}>
        <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={JS} alt="js" className={styles.skillIncon}/>
              </div>
              <p>JS</p>
            </div>
            <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
                <img src={Swift} alt="js" className={styles.skillIncon}/>
              </div>
              <p>Swift</p>
            </div>
          </div>
        </div>
        <ul>

        </ul>
    </section>
  );
}

export default Experience;

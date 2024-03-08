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
              <div className='skills-item'>
                <img src={JS} alt="js"/>
              </div>
              <p>JS</p>
            </div>
            <div className='skills-item'>
                <img src={Swift} alt="js" className/>
              </div>
              <p>Swift</p>
            </div>
        </div>
        <ul>

        </ul>
    </section>
  );
}

export default Experience;

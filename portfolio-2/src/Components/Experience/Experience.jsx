import React from 'react';
import styles from "./Experience.module.css"

import JS from '../../../src/Assets/Skills/js.png';
import swift from '../../../src/Assets/Skills/swift.png';
import react from '../../../src/Assets/Skills/react.png';
import python from '../../../src/Assets/Skills/python_2.png';
import C from '../../../src/Assets/Skills/c.png';

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My <span>Experience</span></h2>
      <div className={styles.content}>
        <div className={styles.skills}>
            {/* SWIFT */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://developer.apple.com/swift/">
                <img src={swift} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>Swift</p>
            </div>
            {/* REACT JS */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://react.dev/">
                <img src={react} alt="js" className={styles.skillIncon} id='react'/>
                </a>
              </div>
              <p>React JS</p>
            </div>
            {/* PYTHON */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://www.python.org/">
                <img src={python} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>Python</p>
            </div>
            {/* JS */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://www.javascript.com/">
                <img src={JS} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>JavaScript</p>
            </div>
            {/* C# */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://www.javascript.com/">
                <img src={C} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>C#</p>
            </div>
            {/* RAILS */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://www.javascript.com/">
                <img src={C} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>C#</p>
            </div>
          </div>
        </div>
        <ul>

        </ul>
    </section>
  );
}

export default Experience;

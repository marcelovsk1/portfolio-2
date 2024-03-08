import React from 'react';
import styles from "./Experience.module.css"

import JS from '../../../src/Assets/Skills/js.png';
import swift from '../../../src/Assets/Skills/swift.png';
import react from '../../../src/Assets/Skills/react.png';
import python from '../../../src/Assets/Skills/python_2.png';
import C from '../../../src/Assets/Skills/c.png';
import rails from '../../../src/Assets/Skills/rails.svg';
import git from '../../../src/Assets/Skills/git_icon.png';
import unity from '../../../src/Assets/Skills/unity.svg';
import trendit from '../../../src/Assets/Skills/trendit_img.png';

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My <span>Experience</span></h2>
      {/* SKILLS */}
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
              <p>JS</p>
            </div>
            {/* C# */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022">
                <img src={C} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>C#</p>
            </div>
            {/* RAILS */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://rubyonrails.org/">
                <img src={rails} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>Rails</p>
            </div>
            {/* GIT */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://git-scm.com/">
                <img src={git} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>Git</p>
            </div>
            {/* Unity */}
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <a href="https://unity.com/">
                <img src={unity} alt="js" className={styles.skillIncon}/>
                </a>
              </div>
              <p>Unity</p>
            </div>
            {/* HISTORY */}
            <ul className={styles.history}>
              <li className={styles.historyItem}>
                <a href="https://www.trendit.ca/">
                  <img src={trendit} alt="trendit_logo" className={styles.skillIncon}/>
                </a>
                <div className={styles.historyItemDetails}>
                  <h3>Software Engineer Intern</h3>
                  <h3>Trendit - Find Events</h3>
                    <p>Dec, 2023 - Present</p>
                    <p>As a Software Engineer Intern at Trendit - Find Events,
                    I develop and enhance the app's functionality and user experience by implementing updates.
                    I also create scraper robots to gather event data from diverse sources and update the app's database.
                    This includes writing efficient code to handle large volumes of data with accuracy and reliability.
                    </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
  </section>
  );
}

export default Experience;

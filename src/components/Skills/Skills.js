import React from 'react';
// import classes from './Skills.module.css';
import './Skills.scss';

const Skills = () => {
  return (
    <section id='skills-content'>
      <div class='chart-wrapper'>
        {/* removed y axis labels
    <ul class="chart-levels">
      <li>Could teach it</li>
      <li>Used a bunch</li>
      <li>Used in a few projects</li>
      <li>Practiced this a bit</li>
      <li>Learned but need to practice</li>
    </ul> */}
        <ul class='bar-container chart-skills'>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>HTML</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>CSS</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>Javascript</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>React</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>Express</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>Wordpress</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>PHP</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>SQL</span>
          </li>
          <li class='position-relative bg-red' data-level=''>
            <span class='position-absolute w-100'>SEO</span>
          </li>
        </ul>
      </div>

      <div class='otherSkills'>
        <ul>
          <li>Node</li>
          <li>SASS</li>
          <li>Webpack</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Phantom</li>
          <li>Mongoose</li>
          <li>Git</li>
          <li>Bash</li>
          <li>Control Panel</li>
          <li>myPHPAdmin</li>
          <li>Xd</li>
          <li>Terminal</li>
          <li>Advanced Custom Fields</li>
          <li>Squarespace</li>
          <li>Mailchimp</li>
          <li>Account Management</li>
          <li>Project Management</li>
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>FB ads</li>
          <li>SEM Rush</li>
          <li>Screaming Frog</li>
          <li>Google Docs</li>
          <li>Salesforce</li>
          <li>Insightly</li>
          <li>Active Collab / Flux</li>
          <li>Asana</li>
          <li>Basecamp</li>
          <li>Top Producer</li>
          <li>Digital marketing consulting</li>
          <li>content and proof reading</li>
          <li>Sales</li>
          <li>CA R.E. License #01899669</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

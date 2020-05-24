import React, { Component } from 'react';
import './Skills.scss';

class Skills extends Component {
  render() {
    setTimeout(() => {
      document.querySelectorAll('.chart-skill').forEach((skill) => {
        skill.style.height = skill.getAttribute('data-level') + '%';
      });
    }, 500);

    return (
      <section id='skills-content'>
        <div className='chart-wrapper'>
          {/* removed y axis labels
    <ul className="chart-levels">
      <li>Could teach it</li>
      <li>Used a bunch</li>
      <li>Used in a few projects</li>
      <li>Practiced this a bit</li>
      <li>Learned but need to practice</li>
    </ul> */}
          <ul className='bar-container chart-skills'>
            <li className='chart-skill' data-level='80'>
              <span className='chart-skill-text '>HTML</span>
            </li>
            <li className='chart-skill' data-level='75'>
              <span className='chart-skill-text '>CSS</span>
            </li>
            <li className='chart-skill' data-level='55'>
              <span className='chart-skill-text '>Javascript</span>
            </li>
            <li className='chart-skill' data-level='20'>
              <span className='chart-skill-text '>React</span>
            </li>
            <li className='chart-skill' data-level='5'>
              <span className='chart-skill-text '>Express</span>
            </li>
            <li className='chart-skill' data-level='55'>
              <span className='chart-skill-text '>Wordpress</span>
            </li>
            <li className='chart-skill' data-level='40'>
              <span className='chart-skill-text '>PHP</span>
            </li>
            <li className='chart-skill' data-level='65'>
              <span className='chart-skill-text '>SASS</span>
            </li>
            <li className='chart-skill' data-level='80'>
              <span className='chart-skill-text '>SEO</span>
            </li>
          </ul>
        </div>

        <div className='otherSkills'>
          <ul>
            <li>Node</li>
            <li>SQL</li>
            <li>Webpack</li>
            <li>jQuery</li>
            <li>Firebase</li>
            <li>Redux</li>
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
  }
}

export default Skills;

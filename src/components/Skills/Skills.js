import React, { useEffect } from 'react';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';
import './Skills.scss';

const Skills = (props) => {
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();

  useEffect(() => {
    if (!visited) {
      toggleVisited();
    }
  }, [visited, toggleVisited]);

  setTimeout(() => {
    document.querySelectorAll('.chart-skill').forEach((skill) => {
      skill.style.height = skill.getAttribute('data-level') + '%';
    });
  }, 500);

  return (
    <section id='skills-content'>
      <span className='skills-intro'>
        {/* Listing <strong>skills</strong> without a chart is really boring,{' '}
        <span style={{ whiteSpace: 'nowrap' }}>so . . .</span> */}
        I hate these graphs too, but look at the animation 😂
      </span>
      <div className='chart-wrapper'>
        {/* removed y axis labels */}
        <ul className='chart-levels'>
          {/* <li>Can teach it</li> */}
          <li>Experienced</li>
          <li>Practiced it</li>
          <li>Learned it</li>
        </ul>
        <ul className='bar-container chart-skills'>
          <li className='chart-skill' data-level='95'>
            <span className='chart-skill-text '>HTML</span>
          </li>
          <li className='chart-skill' data-level='93'>
            <span className='chart-skill-text '>CSS</span>
          </li>
          <li className='chart-skill' data-level='93'>
            <span className='chart-skill-text '>SASS</span>
          </li>
          <li className='chart-skill' data-level='90'>
            <span className='chart-skill-text '>Javascript</span>
          </li>
          <li className='chart-skill' data-level='88'>
            <span className='chart-skill-text '>React</span>
          </li>
          <li className='chart-skill' data-level='45'>
            <span className='chart-skill-text '>Python</span>
          </li>
          <li className='chart-skill' data-level='90'>
            <span className='chart-skill-text '>Wordpress</span>
          </li>
          <li className='chart-skill' data-level='85'>
            <span className='chart-skill-text '>PHP</span>
          </li>
          <li className='chart-skill' data-level='95'>
            <span className='chart-skill-text '>SEO</span>
          </li>
        </ul>
      </div>

      <div className='otherSkills'>
        <ul>
          <li>Chakra UI</li>
          <li>Framer Motion</li>
          <li>Gatsby</li>
          <li>Material UI</li>
          <li>Styled Components</li>
          <li>Bootstrap</li>
          <li>Webpack</li>
          <li>jQuery</li>
          <li>Emotion</li>
          <li>React-Spring</li>
          <li>Redux</li>
          <li>Formik</li>
          <li>Yup</li>
          <li>Smooth Scrollbar</li>
          <li>Node</li>
          <li>Express</li>
          <li>Flask</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>SQLAlchemy</li>
          <li>SQL</li>
          <li>Firebase</li>
          <li>C#</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Phantom</li>
          <li>Mongoose</li>
          <li>Git</li>
          {/* <li>Bash</li> */}
          {/* <li>Control Panel</li>
          <li>myPHPAdmin</li> */}
          <li>Xd</li>
          <li>Photoshop</li>
          <li>Lightroom</li>
          <li>Advanced Custom Fields</li>
          <li>Local by Flywheel</li>
          <li>Squarespace</li>
          <li>Mailchimp</li>
          <li>Account Management</li>
          <li>Project Management</li>
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>FB ads</li>
          <li>SEM Rush</li>
          <li>Screaming Frog</li>
          {/* <li>Google Docs</li> */}
          <li>Salesforce</li>
          {/* <li>Insightly</li> */}
          <li>Active Collab</li>
          <li>Asana</li>
          <li>Basecamp</li>
          {/* <li>Top Producer</li>
          <li>Digital marketing consulting</li>
          <li>Content and proof reading</li>
          <li>Sales</li>
          <li>CA R.E. License #01899669</li> */}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

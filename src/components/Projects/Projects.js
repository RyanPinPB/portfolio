import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';

import './Projects.scss';

const Projects = (props) => {
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();

  useEffect(() => {
    if (!visited) {
      toggleVisited();
    }
  }, [visited, toggleVisited]);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const slideUp = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  return (
    <section id='projects-content'>
      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Pacific Beach Homes</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview pbhomes'>
          <div className='projectContent pbhomesContent'>
            <ul className='projectSkills'>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>GIT</li>
              <li>Wordpress</li>
              <li>Advanced Custom Fields</li>
              <li>Webpack</li>
              <li>Content</li>
            </ul>
            <a
              className='viewProject'
              href='https://pacificbeachhomes.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>La Jolla Agent</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview ljagent'>
          <div className='projectContent ljagentContent'>
            <ul className='projectSkills'>
              <li>HTML</li>
              <li>CSS</li>
              <li>SEO</li>
              <li>Wordpress</li>
              <li>Blogging</li>
              <li>Mailchimp</li>
              <li>Content</li>
            </ul>
            <a
              className='viewProject'
              href='https://lajollaagent.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>R.H. Bishop Books</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview bishop'>
          <div className='projectContent bishopContent'>
            <ul className='projectSkills'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Squarespace</li>
              <li>Design</li>
            </ul>
            <a
              className='viewProject'
              href='https://www.rhbishopbooks.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Sam's Portfolio</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview samport'>
          <div className='projectContent samportContent'>
            <ul className='projectSkills'>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>Wordpress</li>
              <li>Advanced Custom Fields</li>
            </ul>
            <a
              className='viewProject'
              href='https://sampearson.digital'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Travel Theme</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview travel'>
          <div className='projectContent travelContent'>
            <ul className='projectSkills'>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>GIT</li>
              <li>Wordpress</li>
              <li>Advanced Custom Fields</li>
            </ul>
            <a
              className='viewProject'
              href='https://travel.ryanpearson.website'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Chiggy Bank</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview chiggybank'>
          <div className='projectContent chiggyContent'>
            <ul className='projectSkills'>
              <li>Python</li>
              <li>Flask</li>
              <li>Postgres</li>
              <li>SQLAlchemy</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>User Authentication</li>
              <li>Session</li>
            </ul>
            <a
              className='viewProject'
              href='https://chiggybank.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Login/Signup db Auth</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview burger'>
          <div className='projectContent burgerContent'>
            <ul className='projectSkills'>
              <li>React</li>
              <li>Redux</li>
              <li>JSX</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>User Authentication</li>
              <li>Local Storage</li>
              <li>Jest</li>
              <li>Firebase</li>
            </ul>
            <a
              className='viewProject'
              href='https://react-my-burger-7ef03.web.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Jammming</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview jamming'>
          <div className='projectContent jammingContent'>
            <ul className='projectSkills'>
              <li>React</li>
              <li>JSX</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Spotify API</li>
              <li>JSON</li>
            </ul>
            <a
              className='viewProject'
              href='https://zen-heisenberg-861338.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Ravenous</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview ravenous'>
          <div className='projectContent ravenousContent'>
            <ul className='projectSkills'>
              <li>React</li>
              <li>JSX</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Yelp API</li>
              <li>JSON</li>
            </ul>
            <a
              className='viewProject'
              href='https://jolly-gates-109dc9.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>AudioDB</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview audioDB'>
          <div className='projectContent burgerContent'>
            <ul className='projectSkills'>
              <li>JSX</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Material UI</li>
            </ul>
            <a
              className='viewProject'
              href='https://unruffled-hoover-91181f.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </animated.div>
      </div>

      <div className='projectContainer'>
        <animated.div style={slideUp} className='windowHeader'>
          <div className='browser-button-close'></div>
          <div className='browser-button-minimize'></div>
          <div className='browser-button-expand'></div>
          <div className='windowTitle'>Mr Robot</div>
        </animated.div>
        <animated.div style={fadeIn} className='preview robot'>
          <div className='projectContent robotContent'>
            <ul className='projectSkills'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <Link to='/projects/robot' className='viewProject'>
              View Project
            </Link>
          </div>
        </animated.div>
      </div>

      {/* 
                <div className='projectContainer'>
          <animated.div style={slideUp} className='windowHeader'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Gates Vacation Homes</div>
          </animated.div>
          <animated.div style={fadeIn} className='preview gatesVacation'>
            <div className='projectContent gatesContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>SCSS</li>
                <li>PHP</li>
                <li>Local</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </animated.div>
        </div> */}
    </section>
  );
};

export default Projects;

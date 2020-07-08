import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

class Projects extends Component {
  componentDidMount() {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-up');

    // document.addEventListener("DOMContentLoaded", function() {

    if ('IntersectionObserver' in window) {
      const appearOptions = {
        threshold: 0.3,
        // rootMargin: "0px 0px 60px 0px"
      };

      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });

      sliders.forEach((slider) => {
        appearOnScroll.observe(slider);
      });
    } else {
      while (faders.length > 0) {
        faders[0].classList.add('appear');
      }
      while (sliders.length > 0) {
        sliders[0].classList.add('appear');
      }
    }
  }
  render() {
    return (
      <section id='projects-content'>
        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Pacific Beach Homes</div>
          </div>
          <div className='preview pbhomes fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>La Jolla Agent</div>
          </div>
          <div className='preview ljagent fade-in'>
            <div className='projectContent ljagentContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>SEO</li>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>R.H. Bishop Books</div>
          </div>
          <div className='preview bishop fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Sam's Portfolio</div>
          </div>
          <div className='preview samport fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Travel Theme</div>
          </div>
          <div className='preview travel fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Login/Signup db Auth</div>
          </div>
          <div className='preview burger fade-in'>
            <div className='projectContent burgerContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Jamming</div>
          </div>
          <div className='preview jamming fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Ravenous</div>
          </div>
          <div className='preview ravenous fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>AudioDB</div>
          </div>
          <div className='preview audioDB fade-in'>
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
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Mr Robot</div>
          </div>
          <div className='preview robot fade-in'>
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
          </div>
        </div>

        {/* 
                <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Gates Vacation Homes</div>
          </div>
          <div className='preview gatesVacation fade-in'>
            <div className='projectContent gatesContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>SCSS</li>
                <li>PHP</li>
                <li>Local</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Musicon</div>
          </div>
          <div className='preview musicon fade-in'>
            <div className='projectContent musiconContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>TeaCozy</div>
          </div>
          <div className='preview teaCozy fade-in'>
            <div className='projectContent teaCozyContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Projects;

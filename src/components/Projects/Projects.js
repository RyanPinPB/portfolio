import React, { Component } from 'react';
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
                target='blank'
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
                target='blank'
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
                target='blank'
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
                <li>Squarespace</li>
                <li>CSS</li>
                <li>XD</li>
              </ul>
              <a
                className='viewProject'
                href='https://www.rhbishopbooks.com/'
                target='blank'
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
                target='blank'
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
            <div className='windowTitle'>Jamming</div>
          </div>
          <div className='preview jamming fade-in'>
            <div className='projectContent jammingContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>JSON</li>
              </ul>
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
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>JSON</li>
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
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>RyanPearson portfolio</div>
          </div>
          <div className='preview portfolio fade-in'>
            <div className='projectContent portfolioContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='projectContainer'>
          <div className='windowHeader slide-up'>
            <div className='browser-button-close'></div>
            <div className='browser-button-minimize'></div>
            <div className='browser-button-expand'></div>
            <div className='windowTitle'>Chore Door game</div>
          </div>
          <div className='preview choreDoor fade-in'>
            <div className='projectContent choreDoorContent'>
              <ul className='projectSkills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;

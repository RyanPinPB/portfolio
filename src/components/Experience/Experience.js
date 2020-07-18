import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';

import './Experience.scss';

const Experience = (props) => {
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();

  useEffect(() => {
    if (!visited) {
      toggleVisited();
    }
  }, [visited, toggleVisited]);

  const [active, setActive] = useState('initial');

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const slideUp = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(100px)' },
  });

  const oneClick = () => {
    setActive('one');
  };

  const twoClick = () => {
    setActive('two');
  };

  const threeClick = () => {
    setActive('three');
  };

  const fourClick = () => {
    setActive('four');
  };

  const closeJob = () => {
    setActive('all');
  };

  let job = null;

  if (active === 'initial') {
    job = (
      <div className='jobsContainer'>
        <div className='job one'>
          <animated.div style={slideUp} className='windowHeader'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={oneClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>1P21 Interactive</div>
          </animated.div>
          <animated.div
            style={fadeIn}
            className='preview point fade-in'
            onClick={oneClick}
          ></animated.div>
        </div>

        <div className='job two'>
          <animated.div style={slideUp} className='windowHeader'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={twoClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>La Jolla Agent</div>
          </animated.div>
          <animated.div
            style={fadeIn}
            className='preview ljagent fade-in'
            onClick={twoClick}
          ></animated.div>
        </div>

        <div className='job three'>
          <animated.div style={slideUp} className='windowHeader'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={threeClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>National Funding</div>
          </animated.div>
          <animated.div
            style={fadeIn}
            className='preview nfunding fade-in'
            onClick={threeClick}
          ></animated.div>
        </div>

        <div className='job four'>
          <animated.div style={slideUp} className='windowHeader'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={fourClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>Heller Real Estate</div>
          </animated.div>
          <animated.div
            style={fadeIn}
            className='preview heller fade-in'
            onClick={fourClick}
          ></animated.div>
        </div>
      </div>
    );
  } else if (active === 'one') {
    job = (
      <div className='jobContainer'>
        <div className='job one'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>1P21 Interactive</div>
          </animated.div>
          <div
            className='preview point fade-in appear'
            onClick={closeJob}
          ></div>
        </div>
        <div id='oneContent' className='jobContent' onClick={closeJob}>
          <h3 className='title'>Digital Account Manager and Project Manager</h3>
          <div className='jobData'>
            <span className='dates'>2018 – 2019</span>
            <a
              href='https://www.1point21interactive.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <span className='employer'>
                High Rank Websites, Inc - 1P21 Interactive
              </span>
            </a>
            <span className='location'>San Diego, CA</span>
          </div>
          <div className='jobSummary'>
            "We make beautiful and fast websites and provide lead solutions"
          </div>
          <ul className='tasks'>
            <li>
              Gate keeper and spokesperson for all client related questions
            </li>
            <li>Consulted clients on website builds and updates</li>
            <li>Advised on SEO, content, GMB and PPC</li>
            <li>
              Provided Wordpress and analytics training to clients for new sites
            </li>
            <li>
              Handled questions for billing, upgrades, problems and site edits
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (active === 'two') {
    job = (
      <div className='jobContainer'>
        <div className='job two'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>La Jolla Agent</div>
          </animated.div>
          <div
            className='preview ljagent fade-in appear'
            onClick={closeJob}
          ></div>
        </div>
        <div id='twoContent' className='jobContent' onClick={closeJob}>
          <h3 className='title'>Digital Marketing Manager and Realtor</h3>
          <div className='jobData'>
            <span className='dates'>2011-13 and 2015-18</span>
            <a
              href='https://www.lajollaagent.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <span className='employer'>LaJollaAgent.com</span>
            </a>
            <span className='location'>San Diego, CA</span>
          </div>
          <div className='jobSummary'>
            "Coastal real estate team with a digital emphasis"
          </div>
          <ul className='tasks'>
            <li>
              Created and proofed campaigns, mailchimp E-blasts, social media
              and blog posts
            </li>
            <li>Google and FB Ads lead management</li>
            <li>Web dev edits for landing pages and blog posts</li>
            <li>
              Buyer and seller residential sales: Prospecting, contracts,
              escrows – real estate
            </li>
            <li>
              Helped transition online presence to Coldwell Banker and then
              Berkshire Hathaway
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (active === 'three') {
    job = (
      <div className='jobContainer'>
        <div className='job three'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>National Funding</div>
          </animated.div>
          <div
            className='preview nfunding fade-in appear'
            onClick={closeJob}
          ></div>
        </div>
        <div id='threeContent' className='jobContent' onClick={closeJob}>
          <h3 className='title'>Business Finance Consultant</h3>
          <div className='jobData'>
            <span className='dates'>2014 – 2015</span>
            <a
              href='https://www.nationalfunding.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <span className='employer'>National Funding</span>
            </a>
            <span className='location'>San Diego, CA</span>
          </div>
          <div className='jobSummary'>
            "We offer cash/leasing/financing to small businesses"
          </div>
          <ul className='tasks'>
            <li>Inbound and outbound sales for business loans</li>
            <li>Credit and financial statement analysis</li>
            <li>Built SalesForce marketing campaigns</li>
          </ul>
        </div>
      </div>
    );
  } else if (active === 'four') {
    job = (
      <div className='jobContainer'>
        <div className='job four'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={closeJob}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>Heller Real Estate</div>
          </animated.div>
          <div
            className='preview heller fade-in appear'
            onClick={closeJob}
          ></div>
        </div>
        <div id='fourContent' className='jobContent' onClick={closeJob}>
          <h3 className='title'>Digital Marketing Manager and Realtor</h3>
          <div className='jobData'>
            <span className='dates'>2013 – 2014</span>
            <a
              href='https://hellerthehomeseller.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <span className='employer'>
                Heller Real Estate Group – Keller Williams
              </span>
            </a>
            <span className='location'>Encinitas, CA</span>
          </div>
          <div className='jobSummary'>
            "High volume team with multi-platform marketing"
          </div>
          <ul className='tasks'>
            <li>
              Helped set up their website and automated follow-up camapaigns for
              leads
            </li>
            <li>
              Increased multi-platform online efficiency, generating leads and
              online presence
            </li>
            <li>
              Buyer and seller residential sales: Prospecting, contracts,
              escrows – real estate
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (active === 'all') {
    job = (
      <div className='jobsContainer'>
        <div className='job one'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={oneClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>1P21 Interactive</div>
          </animated.div>
          <div
            className='preview point fade-in appear'
            onClick={oneClick}
          ></div>
        </div>

        <div className='job two'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={twoClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>La Jolla Agent</div>
          </animated.div>
          <div
            className='preview ljagent fade-in appear'
            onClick={twoClick}
          ></div>
        </div>

        <div className='job three'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={threeClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>National Funding</div>
          </animated.div>
          <div
            className='preview nfunding fade-in appear'
            onClick={threeClick}
          ></div>
        </div>

        <div className='job four'>
          <animated.div style={slideUp} className='windowHeader appear'>
            <button className='browser-button-close'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
              </svg>
            </button>
            <button className='browser-button-minimize'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M0 10h24v4h-24z' />
              </svg>
            </button>
            <button className='browser-button-expand' onClick={fourClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6px'
                height='6px'
                fill='rgba(0,0,0,0)'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </button>
            <div className='windowTitle'>Heller Real Estate</div>
          </animated.div>
          <div
            className='preview heller fade-in appear'
            onClick={fourClick}
          ></div>
        </div>
      </div>
    );
  }

  return <section id='exp-content'>{job}</section>;
};

export default Experience;

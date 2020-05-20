import React, { Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  state = {
    active: 'initial',
  };

  oneClick = () => {
    this.setState({ active: 'one' });
  };

  twoClick = () => {
    this.setState({ active: 'two' });
  };

  threeClick = () => {
    this.setState({ active: 'three' });
  };

  fourClick = () => {
    this.setState({ active: 'four' });
  };

  closeJob = () => {
    this.setState({ active: 'all' });
  };

  componentDidMount() {
    const faders = document.querySelectorAll('.fade-in:not(.appear)');
    const sliders = document.querySelectorAll('.slide-up:not(.appear)');

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
      document.querySelectorAll('.fade-in:not(.appear)').forEach((fader) => {
        fader.classList.add('appear');
      });
      document.querySelectorAll('.slide-up:not(.appear)').forEach((slider) => {
        slider.classList.add('appear');
      });
    }
  }

  render() {
    let job = null;

    if (this.state.active === 'initial') {
      job = (
        <div className='jobsContainer'>
          <div className='job one'>
            <div className='windowHeader slide-up'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button className='browser-button-expand' onClick={this.oneClick}>
                +
              </button>
              <div className='windowTitle'>1P21 Interactive</div>
            </div>
            <div
              className='preview point fade-in'
              onClick={this.oneClick}
            ></div>
          </div>

          <div className='job two'>
            <div className='windowHeader slide-up'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button className='browser-button-expand' onClick={this.twoClick}>
                +
              </button>
              <div className='windowTitle'>La Jolla Agent</div>
            </div>
            <div
              className='preview ljagent fade-in'
              onClick={this.twoClick}
            ></div>
          </div>

          <div className='job three'>
            <div className='windowHeader slide-up'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button
                className='browser-button-expand'
                onClick={this.threeClick}
              >
                +
              </button>
              <div className='windowTitle'>National Funding</div>
            </div>
            <div
              className='preview nfunding fade-in'
              onClick={this.threeClick}
            ></div>
          </div>

          <div className='job four'>
            <div className='windowHeader slide-up'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button
                className='browser-button-expand'
                onClick={this.fourClick}
              >
                +
              </button>
              <div className='windowTitle'>Heller Real Estate</div>
            </div>
            <div
              className='preview heller fade-in'
              onClick={this.fourClick}
            ></div>
          </div>
        </div>
      );
    } else if (this.state.active === 'one') {
      job = (
        <div className='jobContainer'>
          <div className='job one'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button
                className='browser-button-minimize'
                onClick={this.closeJob}
              >
                −
              </button>
              <button className='browser-button-expand'>+</button>
              <div className='windowTitle'>1P21 Interactive</div>
            </div>
            <div
              className='preview point fade-in appear'
              onClick={this.closeJob}
            ></div>
          </div>
          <div id='oneContent' className='jobContent' onClick={this.closeJob}>
            <h3 className='title'>
              Digital Account Manager and Project Manager
            </h3>
            <div className='jobData'>
              <span className='dates'>2018 – 2019</span>
              <a href='https://www.1point21interactive.com/' target='blank'>
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
                Provided Wordpress and analytics training to clients for new
                sites
              </li>
              <li>
                Handled questions for billing, upgrades, problems and site edits
              </li>
            </ul>
          </div>
        </div>
      );
    } else if (this.state.active === 'two') {
      job = (
        <div className='jobContainer'>
          <div className='job two'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button
                className='browser-button-minimize'
                onClick={this.closeJob}
              >
                −
              </button>
              <button className='browser-button-expand'>+</button>
              <div className='windowTitle'>La Jolla Agent</div>
            </div>
            <div
              className='preview ljagent fade-in appear'
              onClick={this.closeJob}
            ></div>
          </div>
          <div id='twoContent' className='jobContent' onClick={this.closeJob}>
            <h3 className='title'>Digital Marketing Manager and Realtor</h3>
            <div className='jobData'>
              <span className='dates'>2011-13 and 2015-18</span>
              <a href='https://www.lajollaagent.com/' target='blank'>
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
    } else if (this.state.active === 'three') {
      job = (
        <div className='jobContainer'>
          <div className='job three'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button
                className='browser-button-minimize'
                onClick={this.closeJob}
              >
                −
              </button>
              <button className='browser-button-expand'>+</button>
              <div className='windowTitle'>National Funding</div>
            </div>
            <div
              className='preview nfunding fade-in appear'
              onClick={this.closeJob}
            ></div>
          </div>
          <div id='threeContent' className='jobContent' onClick={this.closeJob}>
            <h3 className='title'>Business Finance Consultant</h3>
            <div className='jobData'>
              <span className='dates'>2014 – 2015</span>
              <a href='https://www.nationalfunding.com/' target='blank'>
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
    } else if (this.state.active === 'four') {
      job = (
        <div className='jobContainer'>
          <div className='job four'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button
                className='browser-button-minimize'
                onClick={this.closeJob}
              >
                −
              </button>
              <button className='browser-button-expand'>+</button>
              <div className='windowTitle'>Heller Real Estate</div>
            </div>
            <div
              className='preview heller fade-in appear'
              onClick={this.closeJob}
            ></div>
          </div>
          <div id='fourContent' className='jobContent' onClick={this.closeJob}>
            <h3 className='title'>Digital Marketing Manager and Realtor</h3>
            <div className='jobData'>
              <span className='dates'>2013 – 2014</span>
              <a href='https://hellerthehomeseller.com/' target='blank'>
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
                Helped set up their website and automated follow-up camapaigns
                for leads
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
    } else if (this.state.active === 'all') {
      job = (
        <div className='jobsContainer'>
          <div className='job one'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button className='browser-button-expand' onClick={this.oneClick}>
                +
              </button>
              <div className='windowTitle'>1P21 Interactive</div>
            </div>
            <div
              className='preview point fade-in appear'
              onClick={this.oneClick}
            ></div>
          </div>

          <div className='job two'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button className='browser-button-expand' onClick={this.twoClick}>
                +
              </button>
              <div className='windowTitle'>La Jolla Agent</div>
            </div>
            <div
              className='preview ljagent fade-in appear'
              onClick={this.twoClick}
            ></div>
          </div>

          <div className='job three'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button
                className='browser-button-expand'
                onClick={this.threeClick}
              >
                +
              </button>
              <div className='windowTitle'>National Funding</div>
            </div>
            <div
              className='preview nfunding fade-in appear'
              onClick={this.threeClick}
            ></div>
          </div>

          <div className='job four'>
            <div className='windowHeader slide-up appear'>
              <button className='browser-button-close'>x</button>
              <button className='browser-button-minimize'>−</button>
              <button
                className='browser-button-expand'
                onClick={this.fourClick}
              >
                +
              </button>
              <div className='windowTitle'>Heller Real Estate</div>
            </div>
            <div
              className='preview heller fade-in appear'
              onClick={this.fourClick}
            ></div>
          </div>
        </div>
      );
    }

    return <section id='exp-content'>{job}</section>;
  }
}

export default Experience;

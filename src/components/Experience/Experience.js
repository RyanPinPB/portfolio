import React, { Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  state = {
    active: 'all',
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

  render() {
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        cursor.setAttribute(
          'style',
          'top: ' + (e.pageY - 12) + 'px; left: ' + (e.pageX - 12) + 'px;'
        );
      });

      document.addEventListener('click', () => {
        const cursor = document.querySelector('.cursor');
        cursor.classList.add('expand');

        setTimeout(() => {
          cursor.classList.remove('expand');
        }, 500);
      });
    }

    return (
      <section id='exp-content'>
        <div className='job one' onClick={this.oneClick}>
          <div className='windowHeader slide-up'>
            <div className='browserButton'></div>
            <div className='windowTitle'>1P21 Interactive</div>
          </div>
          <div className='preview point fade-in'></div>

          <div id='oneContent' className='jobContent'>
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

        <div className='job two' onClick={this.twoClick}>
          <div className='windowHeader slide-up'>
            <div className='browserButton'></div>
            <div className='windowTitle'>La Jolla Agent</div>
          </div>
          <div className='preview ljagent fade-in'></div>

          <div id='twoContent' className='jobContent'>
            <h3 className='title'>Digital Marketing Manager and Realtor</h3>
            <div className='jobData'>
              <span className='dates'>2011-13 & 2015-18</span>
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

        <div className='job three' onClick={this.threeClick}>
          <div className='windowHeader slide-up'>
            <div className='browserButton'></div>
            <div className='windowTitle'>National Funding</div>
          </div>
          <div className='preview nfunding fade-in'></div>
          <div id='threeContent' className='jobContent'>
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

        <div className='job four' onClick={this.fourClick}>
          <div className='windowHeader slide-up'>
            <div className='browserButton'></div>
            <div className='windowTitle'>Heller Real Estate</div>
          </div>
          <div className='preview heller fade-in'></div>
          <div id='fourContent' className='jobContent'>
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
      </section>
    );
  }
}

export default Experience;

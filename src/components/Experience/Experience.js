import React, { Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  render() {
    return (
      <section id='exp-content'>
        <div class='cursor'></div>
        <div class='job one' onClick='oneClick()'>
          <div class='windowHeader slide-up'>
            <div class='browserButton'></div>
            <div class='windowTitle'>1P21 Interactive</div>
          </div>
          <div class='preview point fade-in'></div>

          <div id='oneContent' class='jobContent'>
            <h3 class='title'>Digital Account Manager and Project Manager</h3>
            <div class='jobData'>
              <span class='dates'>2018 – 2019</span>
              <a href='https://www.1point21interactive.com/' target='blank'>
                <span class='employer'>
                  High Rank Websites, Inc - 1P21 Interactive
                </span>
              </a>
              <span class='location'>San Diego, CA</span>
            </div>
            <div class='jobSummary'>
              "We make beautiful and fast websites and provide lead solutions"
            </div>
            <ul class='tasks'>
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

        <div class='job two' onClick='twoClick()'>
          <div class='windowHeader slide-up'>
            <div class='browserButton'></div>
            <div class='windowTitle'>La Jolla Agent</div>
          </div>
          <div class='preview ljagent fade-in'></div>

          <div id='twoContent' class='jobContent'>
            <h3 class='title'>Digital Marketing Manager and Realtor</h3>
            <div class='jobData'>
              <span class='dates'>2011-13 & 2015-18</span>
              <a href='https://www.lajollaagent.com/' target='blank'>
                <span class='employer'>LaJollaAgent.com</span>
              </a>
              <span class='location'>San Diego, CA</span>
            </div>
            <div class='jobSummary'>
              "Coastal real estate team with a digital emphasis"
            </div>
            <ul class='tasks'>
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

        <div class='job three' onClick='threeClick()'>
          <div class='windowHeader slide-up'>
            <div class='browserButton'></div>
            <div class='windowTitle'>National Funding</div>
          </div>
          <div class='preview nfunding fade-in'></div>
          <div id='threeContent' class='jobContent'>
            <h3 class='title'>Business Finance Consultant</h3>
            <div class='jobData'>
              <span class='dates'>2014 – 2015</span>
              <a href='https://www.nationalfunding.com/' target='blank'>
                <span class='employer'>National Funding</span>
              </a>
              <span class='location'>San Diego, CA</span>
            </div>
            <div class='jobSummary'>
              "We offer cash/leasing/financing to small businesses"
            </div>
            <ul class='tasks'>
              <li>Inbound and outbound sales for business loans</li>
              <li>Credit and financial statement analysis</li>
              <li>Built SalesForce marketing campaigns</li>
            </ul>
          </div>
        </div>

        <div class='job four' onClick='fourClick()'>
          <div class='windowHeader slide-up'>
            <div class='browserButton'></div>
            <div class='windowTitle'>Heller Real Estate</div>
          </div>
          <div class='preview heller fade-in'></div>
          <div id='fourContent' class='jobContent'>
            <h3 class='title'>Digital Marketing Manager and Realtor</h3>
            <div class='jobData'>
              <span class='dates'>2013 – 2014</span>
              <a href='https://hellerthehomeseller.com/' target='blank'>
                <span class='employer'>
                  Heller Real Estate Group – Keller Williams
                </span>
              </a>
              <span class='location'>Encinitas, CA</span>
            </div>
            <div class='jobSummary'>
              "High volume team with multi-platform marketing"
            </div>
            <ul class='tasks'>
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

import React, { Component } from 'react';
import './Background.scss';
import ryanHead from '../../assets/images/background/ryanPearsonHead.png';
import pdf from '../../assets/icons/pdf.png';

class Background extends Component {
  state = {
    shortVersion: true,
  };

  changeStoryVersion = () => {
    this.setState({ shortVersion: !this.state.shortVersion });
  };

  render() {
    let content = 'Loading story...';
    let storyLength = 'short story';
    if (this.state.shortVersion) {
      storyLength = 'short story';
      content = (
        <div className='bgShort'>
          <p>
            Made first website in 2000 in middle school. Played around with
            photoshop in high school.
          </p>
          <p>
            Graduated from
            <strong> University of California, Santa Barbara </strong>
            with a{' '}
            <strong>
              {' '}
              BA in Economics and a certificate of Technology Entrepreneurship.
            </strong>{' '}
            Learned some C++ and Matlab in college.
          </p>
          <p>
            Got into real estate out of college. Learned that the prospecting
            process of sales was frustrating.
          </p>
          <p>Switched focus to digital marketing.</p>
          <p>
            Found myself tinkering on sites and fell in love with front-end web
            development, mostly HTML, CSS and Javascript.
          </p>
          <p>
            Keeping up with the Code-ashians. Constantly learning new skills
            from
            <a href='https://www.codecademy.com/' target='blank'>
              {' '}
              Codecademy
            </a>
            ,
            <a href='https://www.udemy.com/' target='blank'>
              {' '}
              Udemy
            </a>
            ,
            <a href='https://www.teamtreehouse.com/' target='blank'>
              {' '}
              TeamTreehouse
            </a>{' '}
            and other resources to learn as many useful languages as time
            permits.
          </p>
        </div>
      );
    } else {
      storyLength = 'long story';
      content = (
        <div className='bgLong'>
          <p>
            I grew up with computers all around me. My father is an electrical
            engineer who worked at Qualcomm for over 25 years and is obsessed
            with Apple products. My mother is a dental assistant who is, what
            most would call, a "neat freak". I credit her for my necisity of
            organization. I declared myself a future "architect" in grade school
            and loved playing with blocks, legos, kinects and games. In high
            school I was interested in math and the sciences, winning the senior
            year "Math Award" (given to one male and one female student in the
            school) and passing two years of college level (AP) calculus. The
            second year was self-taught, as the school did not have a teacher
            assigned to 2nd year calculus - so I read a book, practiced, and
            passed the college AP test.
          </p>
          <p>
            After entering college at the
            <strong> University of California, Santa Barbara</strong>
            as an Electrical Engineering student, I became interested in other
            subjects. The strict path for Electrical Engineering had me
            plan/schedule every className of my 4 years of college before I had
            even stepped into my dorm. I became interested in bio-psychology and
            how the brain works, philosophy, and eventually graduated ahead of
            schedule with a{' '}
            <strong>
              BA in Economics and a certificate of Technology Entrepreneurship.
            </strong>
          </p>
          <p>
            After graduating, I went door-to-door in the Village of La Jolla
            looking for work and got into real estate. I used my computer and
            technical skills to help with web development, marketing, database
            organization and implemented systems to increase efficiency. While
            helping with marketing I obtained my real estate license and was
            eager to learn about the sales process. The sales process was
            important for me to learn, as my communication skills were far
            behind my technical skills. Prospecting leads and building
            relationships all while learning the real estate contracts and
            elements of a sale was exciting for several years. However, I soon
            learned that the prospecting process of sales was frustrating and
            seemed like an inneficient use of time. My focus shifted towards
            digital marketing and I became interested in learning about SEO,
            PPC, social media and web development.
          </p>
          <p>
            I'm continuously taking classNamees from
            <a href='https://www.codecademy.com/' target='blank'>
              {' '}
              Codecademy
            </a>
            ,
            <a href='https://www.udemy.com/' target='blank'>
              {' '}
              Udemy
            </a>
            ,
            <a href='https://www.teamtreehouse.com/' target='blank'>
              {' '}
              TeamTreehouse{' '}
            </a>
            and other resources to learn as many useful languages as time
            permits. While I built my first website in middle school, I have
            learned most of my web development skills over the last 9 years in
            case-by-case situations upon project requirements. I am a life-long
            learner who's always interested in expanding my knowledge and taking
            on projects.
          </p>
        </div>
      );
    }

    return (
      <section id='bg-content'>
        <div className='bgHeader'>
          <div className='storyChanger' onClick={this.changeStoryVersion}>
            <img src={ryanHead} alt='Ryan Pearson headshot' />
            <span className='lengthTitle'>{storyLength}</span>
          </div>
          <div className='bgIntro'>
            <h2 className='bgTitle'>Ryan's story</h2>
            <span className='subtitle'>too many, yet not enough words...</span>
          </div>
          <div className='resume'>
            <a href='./documents/resume.pdf' target='blank'>
              <img src={pdf} alt='pdf icon' />
              resumé
            </a>
          </div>
        </div>
        {content}
      </section>
    );
  }
}

export default Background;

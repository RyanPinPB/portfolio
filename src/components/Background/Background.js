import React, { useState, Fragment, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';

import './Background.scss';
import ryanHead from '../../assets/images/background/ryanPearsonHead.png';
// import pdf from '../../assets/icons/pdf.png';
import resume from '../../assets/documents/resume.pdf';

const Background = (props) => {
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();

  useEffect(() => {
    if (!visited) {
      toggleVisited();
    }
  }, [visited, toggleVisited]);

  const [shortVersion, setShortVersion] = useState(true);

  const changeStoryVersion = () => {
    setShortVersion(!shortVersion);
  };

  const shortStoryAnimation = useSpring({
    opacity: shortVersion ? 1 : 0,
    transform: shortVersion ? `translateY(0%)` : `translateY(-100%)`,
    config: { duration: 500 },
  });
  const longStoryAnimation = useSpring({
    transform: !shortVersion ? `translateY(0%)` : `translateY(-100%)`,
    opacity: !shortVersion ? 1 : 0,
    config: { duration: 500 },
  });

  let shortStory = (
    <Fragment>
      <p>
        Made first website in 2000. Started using Photoshop in 2005 and casually
        played around with website code.
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
        Got into real estate. Learned that the prospecting process of sales was
        frustrating.
      </p>
      <p>Switched focus to digital marketing.</p>
      <p>
        Found myself tinkering on sites and{' '}
        <strong>fell in love with front-end web development</strong>, mostly
        with Javascript and React.
      </p>
      <p>
        My favorite resources for learning outside of google and stack overflow:
        <a
          href='https://cs50.harvard.edu/web/2020/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Harvard CS
        </a>
        ,
        <a
          href='https://www.codecademy.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Codecademy
        </a>
        ,
        <a
          href='https://www.udemy.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Udemy
        </a>
        ,
        <a
          href='https://www.youtube.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          YouTube
        </a>
        ,
        <a
          href='https://www.teamtreehouse.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          TeamTreehouse
        </a>{' '}
        .
      </p>
      <p>Living in Pacific Beach, San Diego and looking for work.</p>
    </Fragment>
  );

  let longStory = (
    <Fragment>
      <p>
        I grew up with computers all around me. My father is an electrical
        engineer who worked at Qualcomm for over 25 years and is obsessed with
        Apple products. My mother is a dental assistant who is, what most would
        call, a "neat freak". I credit her for my necisity of organization. I
        declared myself a future "architect" in grade school and loved playing
        with blocks, legos, K'NEX and games.
      </p>
      <p>
        In high school I was interested in math and the sciences, winning the
        senior year "Math Award" (given to one male and one female student in
        the school) and passing two years of college level (AP) calculus. The
        second year was self-taught, as the school did not have a teacher
        assigned to 2nd year calculus - so I read a book, practiced, and passed
        the college AP test.
      </p>
      <p>
        After entering college at the
        <strong> University of California, Santa Barbara </strong>
        as an Electrical Engineering student, I became interested in other
        subjects. After studying bio-psychology, how the brain works and
        philosophy, I eventually graduated ahead of schedule with a{' '}
        <strong>
          BA in Economics and a certificate of Technology Entrepreneurship.
        </strong>
      </p>
      <p>
        After graduating, I went door-to-door in the Village of La Jolla looking
        for work and got into real estate. I used my computer and technical
        skills to{' '}
        <strong>
          help with web development, marketing, database organization
        </strong>{' '}
        and implemented systems to increase efficiency. While helping with
        marketing I obtained my real estate license and was eager to learn about
        the sales process. The sales process was important for me to learn, as
        my communication skills were far behind my technical skills. Prospecting
        leads and building relationships all while learning the real estate
        contracts and elements of a sale was exciting for several years.
      </p>

      <p>
        However, I soon learned that the prospecting process of sales is
        frustrating for me and seemed like an inneficient use of time. My
        <strong> focus shifted towards digital marketing</strong> and I became
        interested in learning about SEO, PPC, social media and web development.
      </p>
      <p>
        I thoroughly enjoy web development and enjoy keeping up with the latest
        languages, frameworks and libraries. My favorite resources for learning
        outside of google and stack overflow:
        <a
          href='https://cs50.harvard.edu/web/2020/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Harvard CS
        </a>
        ,
        <a
          href='https://www.codecademy.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Codecademy
        </a>
        ,
        <a
          href='https://www.udemy.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Udemy
        </a>
        ,
        <a
          href='https://www.youtube.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          YouTube
        </a>
        ,
        <a
          href='https://www.teamtreehouse.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          TeamTreehouse
        </a>{' '}
        . I am a life-long learner who's{' '}
        <strong>
          always interested in expanding my knowledge and taking on projects.
        </strong>
      </p>
      <p>I live in Pacific Beach, San Diego and am looking for work.</p>
    </Fragment>
  );

  let storyLength = 'short story';

  shortVersion ? (storyLength = 'short story') : (storyLength = 'long story');

  return (
    <section id='bg-content'>
      <div className='bgHeader'>
        <div className='storyChanger' onClick={changeStoryVersion}>
          <img src={ryanHead} alt='Ryan Pearson headshot' />
          <span className='lengthTitle'>{storyLength}</span>
        </div>
        <div className='bgIntro'>
          <h2 className='bgTitle'>Ryan's story</h2>
          <span className='subtitle'>too many, yet not enough words...</span>
        </div>
        <div className='resume'>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            {/* <img src={pdf} alt='pdf icon' /> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 24 24'
              className='resume-pdf'
            >
              {' '}
              <title>Ryan's resumé</title>
              <defs>
                <linearGradient id='resume-gradient'>
                  <stop offset='0%' stopColor='var(--orange)' />
                  <stop offset='50%' stopColor='var(--gold)' />
                  <stop offset='100%' stopColor='var(--orange)' />
                </linearGradient>
              </defs>
              <path d='M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z' />
            </svg>
            resumé
          </a>
        </div>
      </div>
      {shortVersion ? (
        <animated.div style={shortStoryAnimation} className='story'>
          {shortStory}
        </animated.div>
      ) : (
        <animated.div style={longStoryAnimation} className='story'>
          {longStory}
        </animated.div>
      )}
    </section>
  );
};

export default Background;

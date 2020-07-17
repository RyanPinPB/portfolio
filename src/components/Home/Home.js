import React, { useEffect } from 'react';
import TiltButton from '../UI/Button/TiltButton';
import { useSpring, animated } from 'react-spring';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';

import './Home.scss';

const Home = (props) => {
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let fadeInDelay = 4000;
    visited ? (fadeInDelay = 1000) : (fadeInDelay = 4000);

    setTimeout(() => {
      document.querySelector('.TiltButton').style.opacity = '1';
    }, fadeInDelay);

    return () => {
      document.body.style.overflow = 'auto';
      toggleVisited();
    };
  }, [visited, toggleVisited]);

  if (visited) {
    setTimeout(() => {
      const sliderItems = document.querySelectorAll('.slider-item');
      sliderItems.forEach((item) => {
        item.style.animationDelay = '0s';
      });
    }, 0);
  }

  let slideDelay = 2500;
  visited ? (slideDelay = 0) : (slideDelay = 2500);

  let slideDown = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
    delay: slideDelay,
  });

  return (
    <div className='home-container'>
      <span className='home-text'>Hi, I'm Ryan and I</span>
      <animated.ul style={slideDown} className='slider'>
        <li
          style={{
            animation: 'cycle 15s linear infinite',
            animationDelay: '2s',
          }}
          className='slider-item'
        >
          am a web developer
        </li>
        <li
          style={{
            animation: 'cycle2 15s linear infinite',
            animationDelay: '2s',
          }}
          className='slider-item'
        >
          help business owners
        </li>
        <li
          style={{
            animation: 'cycle3 15s linear infinite',
            animationDelay: '2s',
          }}
          className='slider-item'
        >
          bond users with products
        </li>
        <li
          style={{
            animation: 'cycle4 15s linear infinite',
            animationDelay: '2s',
          }}
          className='slider-item'
        >
          am a father
        </li>
        <li
          style={{
            animation: 'cycle5 15s linear infinite',
            animationDelay: '2s',
          }}
          className='slider-item'
        >
          am a positive person
        </li>
      </animated.ul>
      <TiltButton to='/projects'>View my work</TiltButton>
    </div>
  );
};

export default Home;

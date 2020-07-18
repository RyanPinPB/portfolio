import React, { useEffect } from 'react';
import TiltButton from '../UI/Button/TiltButton';
import { useSpring, animated } from 'react-spring';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';

import './Home.scss';

const Home = (props) => {
  // check to see if site has been visited (entered from different page)
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();
  let fadeInDelay = 5500;

  // conditionally change background color
  const openAnimation = useSpring({
    backgroundColor: 'black',
    from: { backgroundColor: visited ? 'black' : 'white' },
    config: { duration: 2000, delay: 0 },
  });

  if (visited) {
    fadeInDelay = 1000;
    setTimeout(() => {
      const sliderItems = document.querySelectorAll('.slider-item');
      sliderItems.forEach((item) => {
        item.style.animationDelay = '0s';
      });
    }, 0);
  }

  // add animation for 'Hi, I'm Ryan and I'
  const spanAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: {
      opacity: visited ? 1 : 0,
      transform: visited ? 'scale(1)' : 'scale(0)',
    },
    config: { duration: 1800, delay: 0 },
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (document.querySelector('.TiltButton')) {
        document.querySelector('.TiltButton').style.opacity = '1';
      }
    }, fadeInDelay);

    return () => {
      document.body.style.overflow = 'auto';
      if (!visited) {
        toggleVisited();
      }
    };
  }, [visited, toggleVisited, fadeInDelay]);

  let slideDelay = 2500;
  visited ? (slideDelay = 0) : (slideDelay = 2500);

  let slideDown = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
    delay: slideDelay,
  });

  return (
    <animated.div style={openAnimation} className='home-container'>
      <animated.span style={spanAnimation} className='home-text'>
        Hi, I'm Ryan and I
      </animated.span>
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
          bond users with brands
        </li>
        <li
          style={{
            animation: 'cycle4 15s linear infinite',
            animationDelay: '2s',
          }}
          className='slider-item'
        >
          am a husband and father
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
    </animated.div>
  );
};

export default Home;

import React from 'react';
import classes from './Intro.module.scss';

const Intro = () => (
  <div className={classes.Intro}>
    <span>Hi, I'm Ryan and</span>
    <ul>
      <li
        style={{
          animation: 'cycle 15s linear infinite',
          animationDelay: '2.8s',
        }}
        className='anim1'
      >
        I am a web dev.
      </li>
      <li
        style={{
          animation: 'cycle2 15s linear infinite',
          animationDelay: '2.8s',
        }}
      >
        this is my portfolio
      </li>
      <li
        style={{
          animation: 'cycle3 15s linear infinite',
          animationDelay: '2.8s',
        }}
      >
        I love learning
      </li>
      <li
        style={{
          animation: 'cycle4 15s linear infinite',
          animationDelay: '2.8s',
        }}
      >
        I love efficiency
      </li>
      <li
        style={{
          animation: 'cycle5 15s linear infinite',
          animationDelay: '2.8s',
        }}
      >
        I love organization
      </li>
    </ul>
  </div>
);

export default Intro;

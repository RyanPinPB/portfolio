import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Intro.module.scss';

class Intro extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    // setTimeout(() => {
    //   document.querySelector('.slider').style.visibility = 'visible';
    // }, 2800);

    return (
      <div className={classes.Intro}>
        <span>Hi, I'm Ryan and</span>
        <ul className='slider'>
          <li
            style={{
              animation: 'cycle 15s linear infinite',
              // animationDelay: '2.8s',
            }}
            className='anim1'
          >
            I am a web dev.
          </li>
          <li
            style={{
              animation: 'cycle2 15s linear infinite',
              // animationDelay: '2.8s',
            }}
          >
            this is my portfolio
          </li>
          <li
            style={{
              animation: 'cycle3 15s linear infinite',
              // animationDelay: '2.8s',
            }}
          >
            I love learning
          </li>
          <li
            style={{
              animation: 'cycle4 15s linear infinite',
              // animationDelay: '2.8s',
            }}
          >
            I love efficiency
          </li>
          <li
            style={{
              animation: 'cycle5 15s linear infinite',
              // animationDelay: '2.8s',
            }}
          >
            I love organization
          </li>
        </ul>
        <Link to='/projects'>View my work</Link>
      </div>
    );
  }
}

export default Intro;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';

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
        <span>Hi, I'm Ryan and I</span>
        <ul className='slider'>
          <li
            style={{
              animation: 'cycle 15s linear infinite',
            }}
            className='anim1'
          >
            am a web developer
          </li>
          <li
            style={{
              animation: 'cycle2 15s linear infinite',
            }}
          >
            help business owners
          </li>
          <li
            style={{
              animation: 'cycle3 15s linear infinite',
            }}
          >
            bond users with products
          </li>
          <li
            style={{
              animation: 'cycle4 15s linear infinite',
            }}
          >
            live in Pacific Beach
          </li>
          <li
            style={{
              animation: 'cycle5 15s linear infinite',
            }}
          >
            am a positive person
          </li>
        </ul>
        <Link to='/projects'>View my work</Link>
      </div>
    );
  }
}

export default Intro;

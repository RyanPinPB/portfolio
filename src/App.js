import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './Animations/Animations.scss';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

class App extends Component {
  state = {
    activePage: 'Intro',
  };

  render() {
    //attemtping to fix the mobile 100vh issue for root div and mobile menu
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // adjust 100vh on resize event
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // delayed fade-in of menu
    // setTimeout(() => {
    //   document.querySelector('.site-header').style.opacity = '1';
    // }, 3800);

    return (
      <BrowserRouter>
        <div className='cursor'></div>
        <Header />
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;

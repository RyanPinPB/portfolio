import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Animations/animations.scss';
import './Animations/Animations';
import './App.scss';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';

class App extends Component {
  state = {
    footerShown: false,
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

    let footer = null;
    this.state.footerShown ? (footer = <Footer />) : (footer = null);

    // delayed fade-in of menu
    setTimeout(() => {
      document.querySelector('.site-header').style.opacity = '1';
    }, 3800);

    return (
      <BrowserRouter>
        <div className='cursor'></div>
        <Header />
        <Main />
        {footer}
      </BrowserRouter>
    );
  }
}

export default App;

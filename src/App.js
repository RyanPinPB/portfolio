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
    let footer = null;
    this.state.footerShown ? (footer = <Footer />) : (footer = null);
    return (
      <BrowserRouter>
        <Header />
        <Main />
        {footer}
      </BrowserRouter>
    );
  }
}

export default App;

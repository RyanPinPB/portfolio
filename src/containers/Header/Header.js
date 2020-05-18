import React, { Component } from 'react';
// import classes from './Header.module.scss';
import './Header.scss';
import Menu from './Menu/Menu';
import Hamburger from './Hamburger/Hamburger';

class Header extends Component {
  state = {
    isDesktop: false,
    mobileMenuOpen: false,
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 768 });
  };

  menuClickHandler = () => {
    const currentState = this.state.mobileMenuOpen;

    if (!currentState) {
      document.querySelector('.mobile-nav').style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.querySelector('.mobile-nav').style.height = '0';
      document.body.style.overflow = 'auto';
    }

    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
    document.querySelector('.menu-icon').classList.toggle('menu-open');
  };

  render() {
    let hamburger = <Hamburger menuClicked={this.menuClickHandler} />;
    this.state.isDesktop
      ? (hamburger = null)
      : (hamburger = <Hamburger menuClicked={this.menuClickHandler} />);

    return (
      <header className='site-header'>
        {hamburger}
        <Menu
          linkClick={this.state.isDesktop ? null : this.menuClickHandler}
          desktop={this.state.isDesktop}
        />
      </header>
    );
  }
}

export default Header;

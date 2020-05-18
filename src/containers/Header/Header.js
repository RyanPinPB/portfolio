import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
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
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
    console.log('hamburger clicked');
  };

  render() {
    let hamburgerMenu = <Hamburger menuClicked={this.menuClickHandler} />;
    let menu = hamburgerMenu;
    this.state.isDesktop
      ? (menu = <Menu isDesktop={this.state.isDesktop} />)
      : (menu = hamburgerMenu);
    // this.state.isDesktop ? () mobileMenu = <Menu />) : null;

    return <header className={classes.Header}>{menu}</header>;
  }
}

export default Header;

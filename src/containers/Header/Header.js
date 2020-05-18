import React from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import Menu from './Menu/Menu';
import Hamburger from './Hamburger/Hamburger';

const Header = () => {
  let menu = <Hamburger />;

  menu = <Menu />;
  return <header className={classes.Header}>{menu}</header>;
};

export default Header;

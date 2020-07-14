import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = (props) => {
  let mobileMenu = (
    <div className='mobile-nav menu-container overlay'>
      <div className='overlay-content'>
        <NavLink to='/' exact onClick={props.linkClick}>
          Home
        </NavLink>
        <NavLink to='/skills' exact onClick={props.linkClick}>
          Skills
        </NavLink>
        <NavLink to='/projects' exact onClick={props.linkClick}>
          Projects
        </NavLink>
        <NavLink to='/experience' exact onClick={props.linkClick}>
          Experience
        </NavLink>
        <NavLink to='/background' exact onClick={props.linkClick}>
          Background
        </NavLink>
        <NavLink to='/contact' exact onClick={props.linkClick}>
          Contact Ryan
        </NavLink>
      </div>
    </div>
  );

  let desktopMenu = (
    <ul className='desktop-nav'>
      <li className='menu-animation'>
        {' '}
        <NavLink to='/' exact>
          Home
        </NavLink>
      </li>
      <li className='menu-animation'>
        {' '}
        <NavLink to='/projects' exact>
          Projects
        </NavLink>
      </li>
      <li className='menu-animation'>
        {' '}
        <NavLink to='/skills' exact>
          Skills
        </NavLink>
      </li>
      <li className='menu-animation'>
        {' '}
        <NavLink to='/experience' exact>
          Experience
        </NavLink>
      </li>
      <li className='menu-animation'>
        {' '}
        <NavLink to='/background' exact>
          Background
        </NavLink>
      </li>
      <li className='menu-animation'>
        {' '}
        <NavLink to='/contact' exact>
          Contact Ryan
        </NavLink>
      </li>
    </ul>
  );

  let menu = mobileMenu;
  props.desktop ? (menu = desktopMenu) : (menu = mobileMenu);

  return <nav className='navigation-menu'>{menu}</nav>;
};

export default Menu;

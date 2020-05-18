import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

class Menu extends Component {
  render() {
    let mobileMenu = (
      <div id='mobileNav' className='menu-container overlay'>
        <div className='overlay-content'>
          <NavLink to='/' exact>
            Home
          </NavLink>
          <NavLink to='/projects' exact>
            Projects
          </NavLink>
          <NavLink to='/skills' exact>
            Skills
          </NavLink>
          <NavLink to='/experience' exact>
            Experience
          </NavLink>
          <NavLink to='/background' exact>
            Background
          </NavLink>
          <NavLink to='/contact' exact>
            Contact Ryan
          </NavLink>
        </div>
      </div>
    );

    let desktopMenu = (
      <ul>
        <NavLink to='/' exact>
          Home
        </NavLink>
        <NavLink to='/projects' exact>
          Projects
        </NavLink>
        <NavLink to='/skills' exact>
          Skills
        </NavLink>
        <NavLink to='/experience' exact>
          Experience
        </NavLink>
        <NavLink to='/background' exact>
          Background
        </NavLink>
        <NavLink to='/contact' exact>
          Contact Ryan
        </NavLink>
      </ul>
    );

    let menu = mobileMenu;
    this.props.isDesktop ? (menu = desktopMenu) : (menu = mobileMenu);

    return <nav id='nav-bar'>{menu}</nav>;
  }
}

export default Menu;

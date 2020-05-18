import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

class Menu extends Component {
  render() {
    let mobileMenu = (
      <div className='mobile-nav menu-container overlay'>
        <div className='overlay-content'>
          <NavLink to='/' exact onClick={this.props.linkClick}>
            Home
          </NavLink>
          <NavLink to='/projects' exact onClick={this.props.linkClick}>
            Projects
          </NavLink>
          <NavLink to='/skills' exact onClick={this.props.linkClick}>
            Skills
          </NavLink>
          <NavLink to='/experience' exact onClick={this.props.linkClick}>
            Experience
          </NavLink>
          <NavLink to='/background' exact onClick={this.props.linkClick}>
            Background
          </NavLink>
          <NavLink to='/contact' exact onClick={this.props.linkClick}>
            Contact Ryan
          </NavLink>
        </div>
      </div>
    );

    let desktopMenu = (
      <div className='desktop-nav'>
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
    );

    let menu = mobileMenu;
    this.props.desktop ? (menu = desktopMenu) : (menu = mobileMenu);

    return <nav className='navigation-menu'>{menu}</nav>;
  }
}

export default Menu;

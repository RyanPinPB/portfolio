import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={classes.Menu}>
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
    </nav>
  );
};

export default Menu;

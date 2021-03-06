import React from 'react';
import './Hamburger.scss';

const Hamburger = (props) => {
  return (
    <div className='menu-icon' onClick={props.menuClicked}>
      <div className='hamburger'></div>
      <div className='hamburger-text'>MENU</div>
    </div>
  );
};

export default Hamburger;

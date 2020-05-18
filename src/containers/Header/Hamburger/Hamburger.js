import React from 'react';
import './Hamburger.scss';

const Hamburger = (props) => {
  return (
    // <div classNameName="menu-icon">
    //   <div>bar</div>
    //   <div>bar</div>
    //   <div>bar</div>
    // </div>

    <div className='menu-icon' onClick={props.menuClicked}>
      <div className='hamburger'></div>
      <div className='hamburgertext'>MENU</div>
    </div>
  );
};

export default Hamburger;

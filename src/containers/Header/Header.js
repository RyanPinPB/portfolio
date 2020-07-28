import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './Header.scss';
import Menu from './Menu/Menu';
import Hamburger from './Hamburger/Hamburger';

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slideDown = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    from: { opacity: 0, transform: 'translate3d(0,-200%,0)' },
    delay: 500,
  });

  const menuClickHandler = () => {
    if (!mobileMenuOpen) {
      document.querySelector('.mobile-nav').style.height =
        'calc(var(--vh, 1vh) * 100)';
      document.body.style.overflow = 'hidden';
    } else {
      document.querySelector('.mobile-nav').style.height = '0';
      document.body.style.overflow = 'auto';
    }

    setMobileMenuOpen(!mobileMenuOpen);
    document.querySelector('.menu-icon').classList.toggle('menu-open');
    document.querySelector('.hamburger-text').classList.toggle('not-visible');
  };

  let hamburger = <Hamburger menuClicked={menuClickHandler} />;
  let windowWidth = props.width;
  windowWidth > 768
    ? (hamburger = null)
    : (hamburger = <Hamburger menuClicked={menuClickHandler} />);

  return (
    <animated.header style={slideDown} className='site-header'>
      {hamburger}
      <Menu
        linkClick={windowWidth > 768 ? null : menuClickHandler}
        desktop={windowWidth > 768}
        showContact={props.showFooter}
      />
    </animated.header>
  );
};

export default Header;

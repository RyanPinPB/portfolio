import React, { useEffect, Fragment } from 'react';
import { useGlobalState, useGlobalStateUpdate } from '../Context/GlobalState';
import { useSpring, animated } from 'react-spring';

import Footer from '../../containers/Footer/Footer';
import './Contact.scss';

const Contact = (props) => {
  const visited = useGlobalState();
  const toggleVisited = useGlobalStateUpdate();

  useEffect(() => {
    if (!visited) {
      toggleVisited();
    }
  }, [visited, toggleVisited]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    displaySocialIcons();

    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', customCursorFollow);
      document.addEventListener('click', customCursorClick);
    }

    return () => {
      document.body.style.overflow = 'auto';
      if (window.innerWidth > 768) {
        document.removeEventListener('mousemove', customCursorFollow);
        document.removeEventListener('click', customCursorClick);
        document.querySelector('.cursor').style.opacity = '0';
      }
    };
  }, []);

  const displaySocialIcons = () => {
    setTimeout(() => {
      document.querySelector('.social-icons').style.visibility = 'visible';
      document.querySelectorAll('.social-icon').forEach((icon) => {
        icon.style.width = '45px';
      });
    }, 1000);
  };

  const customCursorFollow = (e) => {
    if (window.innerWidth > 768) {
      const cursor = document.querySelector('.cursor');
      cursor.setAttribute(
        'style',
        'top: ' +
          (e.pageY - 20) +
          'px; left: ' +
          (e.pageX - 20) +
          'px; opacity:.8'
      );
    }
  };

  const customCursorClick = () => {
    if (window.innerWidth > 768) {
      const cursor = document.querySelector('.cursor');
      cursor.classList.add('expand');

      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    }
  };

  let fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Fragment>
      <section id='contact-content'>
        <animated.span style={fadeIn} className='watermark'>
          RYAN
        </animated.span>
        <div className='contactInfo'>
          <div>
            Cell:
            <a
              className='underline-animation'
              href='tel:8587408495'
              title='click to call Ryan'
            >
              {' '}
              +1 (858) 740 8495
            </a>
          </div>
          <div>
            Email:
            <a
              className='underline-animation'
              href='mailto:ryanpinpb@gmail.com'
              title='click to email Ryan'
            >
              {' '}
              RyanPinPB@gmail.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Contact;

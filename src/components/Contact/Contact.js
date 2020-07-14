import React, { useEffect } from 'react';
import './Contact.scss';

const Contact = (props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    document.querySelector('.social-icon').style.width === '45px'
      ? console.log('Contact Ryan or check out his social media pages')
      : displaySocialIcons();

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
    document.querySelector('.social-icons').style.visibility = 'visible';
    setTimeout(() => {
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

  return (
    <section id='contact-content'>
      <span className='watermark'>RYAN</span>
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
  );
};

export default Contact;

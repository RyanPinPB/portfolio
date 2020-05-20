import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.customCursorFollow = this.customCursorFollow.bind(this);
    this.customCursorClick = this.customCursorClick.bind(this);
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden';

    document.querySelector('.social-icon').style.width === '45px'
      ? console.log('Contact Ryan or check out his social media pages')
      : document.querySelectorAll('.social-icon').forEach((icon) => {
          icon.style.width = '45px';
        });
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', this.customCursorFollow);
      document.addEventListener('click', this.customCursorClick);
    }
  }

  componentWillUnmount() {
    console.log('Leaving Contact section');
    document.body.style.overflow = 'auto';
    if (window.innerWidth > 768) {
      document.removeEventListener('mousemove', this.customCursorFollow);
      document.removeEventListener('click', this.customCursorClick);
      document.querySelector('.cursor').style.opacity = '0';
    }
  }

  customCursorFollow(e) {
    const cursor = document.querySelector('.cursor');
    cursor.setAttribute(
      'style',
      'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px; opacity:1'
    );
  }

  customCursorClick() {
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('expand');

    setTimeout(() => {
      cursor.classList.remove('expand');
    }, 500);
  }

  render() {
    return (
      <section id='contact-content'>
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
  }
}

export default Contact;

import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.querySelector('.social-icon').style.width === '45px'
      ? console.log('Contact Ryan or check out his social media pages')
      : document.querySelectorAll('.social-icon').forEach((icon) => {
          icon.style.width = '45px';
        });
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
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

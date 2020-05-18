import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id='contact-content'>
      <div class='contactInfo'>
        <div>
          Cell:
          <a
            class='underlineAnimation'
            href='tel:8587408495'
            title='click to call Ryan'
          >
            +1 (858) 740 8495
          </a>
        </div>
        <div>
          Email:
          <a
            class='underlineAnimation'
            href='mailto:ryanpinpb@gmail.com'
            title='click to email Ryan'
          >
            RyanPinPB@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

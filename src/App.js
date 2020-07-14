import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './Animations/Animations.scss';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

const App = (props) => {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function useCurrentWidth() {
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId = null;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      };
    }, []);

    return width;
  }

  let appWidth = useCurrentWidth();
  //create custom cursor for Contact page if screen is large
  let customCursor = null;
  appWidth > 768
    ? (customCursor = <div className='cursor'></div>)
    : (customCursor = null);

  //attemtping to fix the mobile 100vh issue for root div and mobile menu
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // adjust 100vh on resize event
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <BrowserRouter>
      {customCursor}
      <Header width={appWidth} />
      <Main width={appWidth} />
    </BrowserRouter>
  );
};

export default App;

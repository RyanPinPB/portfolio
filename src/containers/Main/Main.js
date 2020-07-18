import React, { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
// import {
//   useGlobalState,
//   useGlobalStateUpdate,
// } from '../../components/Context/GlobalState';
// import { useCallback } from 'react';
// import { useSpring, interpolate } from 'react-spring';
// import { useTheme, useThemeUpdate } from '../../components/Context/GlobalTheme';
// import { useSpring, animated as a, interpolate } from 'react-spring';

import Home from '../../components/Home/Home';
import Projects from '../../components/Projects/Projects';
import MrRobot from '../../components/Projects/Project/MrRobot';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Background from '../../components/Background/Background';
import Contact from '../../components/Contact/Contact';
import './Main.scss';

// An option to have a dark mode/light mode switch toggle has been commented out

const Main = (props) => {
  //theme toggle
  // const darkTheme = useTheme();
  // const toggleTheme = useThemeUpdate();

  // const themeStyles = {
  //   // backgroundColor: darkTheme ? 'var(--black)' : 'var(--white)',
  //   backgroundColor: darkTheme ? 'var(--white)' : 'var(--black)',
  //   // height: '40px',
  //   // width: '40px',
  //   // borderRadius: '50%',
  //   // position: 'fixed',
  //   // left: '10px',
  //   // bottom: '10px',
  //   // cursor: 'pointer',
  //   // zIndex: '100',
  // };

  // const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  // const interpBg = xy.interpolate(
  //   (x, y) =>
  //     `perspective(400px) rotateY(${x / 60}deg) rotateX(${
  //       -y / 60
  //     }deg) translate3d(-50%, -50%, 0)`
  // );

  // const interpEye = interpolate(
  //   [st, xy],
  //   (o, xy) =>
  //     `translate(${xy[0] / 30 + 157},${xy[1] / 30 + 80 + o / 2}) scale(0.8)`
  // );

  // const interpIris = interpolate(
  //   [st, xy],
  //   (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`
  // );

  // const interpPupil = interpolate(
  //   [st, xy],
  //   (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`
  // );

  // const interpSpot = interpolate(
  //   [st, xy],
  //   (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`
  // );

  // const onMove = useCallback(
  //   ({ clientX: x, clientY: y }) =>
  //     set({ xy: [x - window.innerWidth / 7, y - window.innerHeight / 7] }),
  //   [set]
  // );

  // const onScroll = useCallback((e) => set({ st: e.target.scrollTop / 30 }), [
  //   set,
  // ]);

  // end theme toggle

  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,-100%,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
  });

  return (
    <main
      className='Main'
      width={props.width}
      // onMouseMove={onMove}
      // onScroll={onScroll}
    >
      {transitions.map(({ item, props, key }) => (
        <animated.div className='page-container' key={key} style={props}>
          <Switch location={item}>
            <Route path='/projects/robot' component={MrRobot} />
            <Route path='/projects' component={Projects} />
            <Route path='/skills' component={Skills} />
            <Route path='/experience' component={Experience} />
            <Route path='/background' component={Background} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Home} />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </animated.div>
      ))}

      {/* <animated.svg
        onClick={toggleTheme}
        style={{ transform: interpBg }}
        className='theme-toggle-button'
        viewBox='0 0 380 280'
      >
        <animated.g id='eye' transform={interpEye}>
          <circle fill='#FFFFFF' cx='105' cy='104' r='104' />
          <path d='M32.5516247,104.414062 C32.5516247,52.4323881 70.6809824,9.35662037 120.492188,1.64794037 C115.264973,0.835536211 109.915627,0.414062 104.46247,0.414062 C47.0424901,0.414062 0.492188,46.9776706 0.492188,104.414062 C0.492188,161.850453 47.0424901,208.414062 104.46247,208.414062 C109.915627,208.414062 115.264973,207.992588 120.492188,207.180184 C70.6809824,199.471504 32.5516247,156.395736 32.5516247,104.414062 Z' />
          <animated.g transform={interpIris}>
            <path d='M171.507812,103.921875 C171.507812,140.652344 141.730469,170.429688 105,170.429688 C68.269531,170.429688 38.492188,140.652344 38.492188,103.921875 C38.492188,67.191406 68.269531,37.414062 105,37.414062 C141.730469,37.414062 171.507812,67.191406 171.507812,103.921875 Z' />
            <path d='M59,103.921875 C59,70.679688 83.390625,43.132812 115.253906,38.203125 C111.910156,37.683594 108.488281,37.414062 105,37.414062 C68.269531,37.414062 38.492188,67.191406 38.492188,103.921875 C38.492188,140.652344 68.269531,170.429688 105,170.429688 C108.488281,170.429688 111.910156,170.160156 115.253906,169.640625 C83.390625,164.710938 59,137.164062 59,103.921875 Z' />
          </animated.g>
          <animated.g transform={interpPupil} fill='#FFFFFF'>
            <circle fill='#333031' cx='105' cy='104' r='36' />
            <path d='M83,103.921875 C83,86.402344 95.484375,71.804688 112.042969,68.527344 C109.765625,68.078125 107.410156,67.835938 105,67.835938 C85.070312,67.835938 68.914062,83.992188 68.914062,103.921875 C68.914062,123.851562 85.070312,140.007812 105,140.007812 C107.410156,140.007812 109.765625,139.765625 112.042969,139.316406 C95.484375,136.039062 83,121.441406 83,103.921875 Z' />
            <animated.path
              transform={interpSpot}
              d='M148.335938,81.246094 C148.335938,92.210938 139.445312,101.101562 128.480469,101.101562 C117.511719,101.101562 108.625,92.210938 108.625,81.246094 C108.625,70.277344 117.515625,61.386719 128.480469,61.386719 C139.445312,61.386719 148.335938,70.277344 148.335938,81.246094 Z'
            />
          </animated.g>
        </animated.g>
      </animated.svg> */}
    </main>
  );
};

export default Main;

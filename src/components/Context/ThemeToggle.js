import React, { useCallback } from 'react';
import { useTheme, useThemeUpdate } from './GlobalTheme';
import { useSpring, animated as a, interpolate } from 'react-spring';

import './ThemeToggle.scss';

function ThemeToggle() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    // backgroundColor: darkTheme ? 'var(--black)' : 'var(--white)',
    backgroundColor: darkTheme ? 'var(--white)' : 'var(--black)',
    // height: '40px',
    // width: '40px',
    // borderRadius: '50%',
    // position: 'fixed',
    // left: '10px',
    // bottom: '10px',
    // cursor: 'pointer',
    // zIndex: '100',
  };

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  const interpBg = xy.interpolate(
    (x, y) =>
      `perspective(400px) rotateY(${x / 60}deg) rotateX(${
        -y / 60
      }deg) translate3d(-50%, -50%, 0)`
  );

  const interpEye = interpolate(
    [st, xy],
    (o, xy) =>
      `translate(${xy[0] / 30 + 157},${xy[1] / 30 + 80 + o / 2}) scale(0.8)`
  );

  const interpIris = interpolate(
    [st, xy],
    (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`
  );

  const interpPupil = interpolate(
    [st, xy],
    (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`
  );

  const interpSpot = interpolate(
    [st, xy],
    (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`
  );

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    [set]
  );

  const onScroll = useCallback((e) => set({ st: e.target.scrollTop / 30 }), [
    set,
  ]);

  return (
    <div
      style={themeStyles}
      className='theme-toggle-container'
      onClick={toggleTheme}
      onMouseMove={onMove}
      onScroll={onScroll}
    >
      <a.svg style={{ transform: interpBg }} viewBox='0 0 490 512'>
        <g id='bg'>
          <path d='M490,267 C490,402.308594 380.308594,512 245,512 C109.691406,512 0,402.308594 0,267 C0,131.691406 109.691406,22 245,22 C380.308594,22 490,131.691406 490,267 Z' />
        </g>
        <a.g id='eye' transform={interpEye}>
          <circle fill='#FFFFFF' cx='105' cy='104' r='104' />
          <path d='M32.5516247,104.414062 C32.5516247,52.4323881 70.6809824,9.35662037 120.492188,1.64794037 C115.264973,0.835536211 109.915627,0.414062 104.46247,0.414062 C47.0424901,0.414062 0.492188,46.9776706 0.492188,104.414062 C0.492188,161.850453 47.0424901,208.414062 104.46247,208.414062 C109.915627,208.414062 115.264973,207.992588 120.492188,207.180184 C70.6809824,199.471504 32.5516247,156.395736 32.5516247,104.414062 Z' />
          <a.g transform={interpIris}>
            <path d='M171.507812,103.921875 C171.507812,140.652344 141.730469,170.429688 105,170.429688 C68.269531,170.429688 38.492188,140.652344 38.492188,103.921875 C38.492188,67.191406 68.269531,37.414062 105,37.414062 C141.730469,37.414062 171.507812,67.191406 171.507812,103.921875 Z' />
            <path d='M59,103.921875 C59,70.679688 83.390625,43.132812 115.253906,38.203125 C111.910156,37.683594 108.488281,37.414062 105,37.414062 C68.269531,37.414062 38.492188,67.191406 38.492188,103.921875 C38.492188,140.652344 68.269531,170.429688 105,170.429688 C108.488281,170.429688 111.910156,170.160156 115.253906,169.640625 C83.390625,164.710938 59,137.164062 59,103.921875 Z' />
          </a.g>
          <a.g transform={interpPupil} fill='#FFFFFF'>
            <circle fill='#333031' cx='105' cy='104' r='36' />
            <path d='M83,103.921875 C83,86.402344 95.484375,71.804688 112.042969,68.527344 C109.765625,68.078125 107.410156,67.835938 105,67.835938 C85.070312,67.835938 68.914062,83.992188 68.914062,103.921875 C68.914062,123.851562 85.070312,140.007812 105,140.007812 C107.410156,140.007812 109.765625,139.765625 112.042969,139.316406 C95.484375,136.039062 83,121.441406 83,103.921875 Z' />
            <a.path
              transform={interpSpot}
              d='M148.335938,81.246094 C148.335938,92.210938 139.445312,101.101562 128.480469,101.101562 C117.511719,101.101562 108.625,92.210938 108.625,81.246094 C108.625,70.277344 117.515625,61.386719 128.480469,61.386719 C139.445312,61.386719 148.335938,70.277344 148.335938,81.246094 Z'
            />
          </a.g>
        </a.g>
      </a.svg>
    </div>
  );
}

export default ThemeToggle;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import './TiltButton.scss';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 5 + 6,
  (x - window.innerWidth / 2) / 20,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x * 3}deg) rotateY(${y}deg) scale(${s})`;

const TiltButton = (props) => {
  const [tilt, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const TiltButton = animated(Link);

  return (
    <TiltButton
      to={props.to}
      className='TiltButton'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: tilt.xys.interpolate(trans),
      }}
    >
      {props.children}
    </TiltButton>
  );
};

export default TiltButton;

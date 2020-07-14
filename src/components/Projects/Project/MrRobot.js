import React, { useEffect } from 'react';
import './MrRobot.scss';

const MrRobot = (props) => {
  useEffect(() => {
    let doorImage1 = document.getElementById('door1');
    let doorImage2 = document.getElementById('door2');
    let doorImage3 = document.getElementById('door3');
    let botDoorPath =
      'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
    let beachDoorPath =
      'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
    let spaceDoorPath =
      'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

    let numClosedDoors = 3;
    let openDoor1;
    let openDoor2;
    let openDoor3;

    let closedDoorPath =
      'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

    let startButton = document.getElementById('start');

    let currentlyPlaying = true;
    let streak = 0;

    function isBot(door) {
      if (door.src === botDoorPath) {
        return true;
      } else {
        return false;
      }
    }

    function isClicked(door) {
      if (door.src === closedDoorPath) {
        return false;
      } else {
        return true;
      }
    }

    function playDoor(door) {
      numClosedDoors--;
      if (numClosedDoors === 0) {
        gameOver('win');
      } else if (isBot(door)) {
        gameOver();
      }
    }

    const randomChoreDoorGenerator = () => {
      let choreDoor = Math.floor(Math.random() * numClosedDoors);
      if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
      } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
      } else {
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = botDoorPath;
      }
    };

    doorImage1.onclick = () => {
      if (currentlyPlaying === true && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
      }
    };

    doorImage2.onclick = () => {
      if (currentlyPlaying === true && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
      }
    };

    doorImage3.onclick = () => {
      if (currentlyPlaying === true && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
      }
    };

    function startRound() {
      doorImage1.src = closedDoorPath;
      doorImage2.src = closedDoorPath;
      doorImage3.src = closedDoorPath;
      numClosedDoors = 3;
      startButton.innerHTML = 'Good luck!';
      currentlyPlaying = true;
      randomChoreDoorGenerator();
    }

    startButton.onclick = () => {
      if (!currentlyPlaying) {
        startRound();
      }
    };

    function gameOver(status) {
      if (status === 'win') {
        streak = streak + 1;
        startButton.innerHTML = 'You win! Play again?';
      } else {
        streak = 0;
        startButton.innerHTML = 'Game over! Play again?';
      }
      document.querySelector('.streak-value').innerHTML = streak;
      currentlyPlaying = false;
    }

    startRound();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <section className='mr-robot'>
      <div className='robot-header'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='46px'
          height='46px'
          viewBox='0 0 46 46'
          version='1.1'
        >
          <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
          >
            <g
              id='1-panel_example_1-copy-2'
              transform='translate(-114.000000, -2.000000)'
              fill='#000'
            >
              <g id='Group-13' transform='translate(114.000000, 2.000000)'>
                <path
                  d='M5.27979693,28.3328504 L6.25582666,29.3202846 L16.3772645,39.4056084 L17.3532942,40.3930425 L15.0001787,43.8880273 L14.7730403,43.6746693 L13.2757328,42.1802128 C13.5028712,41.352916 13.8640117,40.6325357 14.5325968,40.031902 C14.6528186,39.9249854 14.6932093,39.738713 14.6262082,39.5918808 C14.5592071,39.4445735 14.3857647,39.3514373 14.2251522,39.3785228 C14.1448459,39.3913528 14.0778449,39.4184384 14.0246242,39.4716591 C13.3427339,40.0722927 12.9416778,40.8064534 12.6741487,41.5795792 L10.8556162,39.7520181 C11.0694494,39.2583011 11.2167567,38.8448902 11.7380345,38.4576145 C11.8715615,38.3644783 11.9252574,38.1644255 11.8715615,38.0171182 C11.8045604,37.8569809 11.6439479,37.7500643 11.4705055,37.7771498 C11.4035044,37.7771498 11.3369785,37.8170653 11.2699774,37.8569809 C10.7216141,38.2708669 10.4678654,38.7512788 10.2673374,39.1775196 L8.66311323,37.5500114 L10.6151727,35.6022286 C10.7353945,35.4820069 10.7757852,35.281954 10.6954789,35.1355971 C10.6151727,34.9892402 10.4279498,34.9084587 10.2678125,34.9483743 C10.2008115,34.9616794 10.1342856,35.001595 10.0805897,35.0552909 L8.11522507,37.0163788 L6.4839154,35.402651 C6.92536215,35.2025982 7.39341925,34.9488494 7.82108563,34.4023868 C8.00830847,34.1752485 7.7811701,33.7618376 7.48655548,33.788448 C7.37963889,33.8017532 7.28602747,33.855449 7.2190264,33.9352801 C6.81797037,34.4560827 6.40360916,34.6024397 5.9089417,34.8162729 L4.09040919,33.0153222 C4.86591091,32.7482683 5.58771673,32.3348575 6.18930078,31.6543927 C6.3898288,31.4415099 6.21591113,31.0276239 5.9217717,31.0276239 C5.8148551,31.0276239 5.7079385,31.0680146 5.64093743,31.1478456 C5.03935339,31.8283104 4.31707238,32.1880253 3.48834996,32.4151637 L1.97726206,30.9078773 L1.76342887,30.6945193 L5.27979693,28.3328504 Z M7.20524604,26.1850148 C7.2722471,26.1717096 7.3791637,26.1850148 7.41907923,26.2382355 L7.4860803,26.2914562 L7.49938547,26.3047614 L7.9541374,26.758563 L18.930908,37.7110991 L19.3989651,38.1777307 C19.4122702,38.1777307 19.4122702,38.1910358 19.4255754,38.2048162 L19.4659661,38.2447317 L19.4659661,38.2580369 C19.5329672,38.3117328 19.5462724,38.4713949 19.5058817,38.5250908 L18.3431043,40.2728208 C18.3297991,40.2728208 18.3431043,40.2728208 18.3431043,40.2861259 C18.3297991,40.2861259 18.3160187,40.2861259 18.3027136,40.2728208 L18.1430514,40.0993783 C18.1297463,40.0860731 18.1159659,40.0727679 18.1026607,40.0594628 L16.9127978,38.8719758 L6.79136001,28.786652 L5.66802297,27.6661661 C5.66802297,27.6661661 5.6547178,27.6528609 5.6547178,27.6395557 C5.61480227,27.586335 5.57441155,27.5459443 5.52071566,27.5193339 L5.40049389,27.385807 L5.37388354,27.3591966 C5.37388354,27.3725018 5.36057836,27.3725018 5.38718871,27.3458915 L7.15202533,26.19832 C7.16485532,26.1850148 7.17863568,26.1850148 7.20524604,26.1850148 L7.20524604,26.1850148 Z M19.2245722,24.4510652 C19.2378774,24.43776 19.3452692,24.4510652 19.3718795,24.4776756 C19.3989651,24.5042859 19.4251002,24.5308963 19.4521858,24.5442015 L19.8399366,24.9443071 L20.7622705,25.851435 L21.0830203,26.1717096 C21.1101058,26.2515407 21.1633265,26.3318469 21.2436327,26.3717625 L21.2436327,26.4786791 L20.802186,27.1458386 L18.5426819,24.9048668 L19.2245722,24.4510652 Z M14.1980666,22.4633669 L14.4789009,22.4633669 C14.8666517,22.5032824 15.2277923,22.6634197 15.481541,22.9171684 L17.3000735,24.7314243 L17.6745192,25.0916144 L17.6878243,25.1049196 L19.1447412,26.5589853 L20.588828,28.013051 C20.6021332,28.0263562 20.6292187,28.0396614 20.6420487,28.0529666 L20.9765788,28.3865463 L22.7946362,30.2008022 C23.3026088,30.7073493 23.3966954,31.6814783 22.9951642,32.2821119 L19.6127983,37.3114686 L19.465491,37.1779417 L19.4521858,37.1779417 L8.48872038,26.2387107 L8.35519343,26.0918786 L13.4092597,22.7166404 C13.6363981,22.5702835 13.9172324,22.4899772 14.1980666,22.4633669 L14.1980666,22.4633669 Z M38.5512914,1.74530642 C38.6315976,1.74530642 38.6985987,1.77191678 38.7518194,1.82513748 L39.6342377,2.69234988 C39.7411543,2.79926647 39.7411543,2.97223377 39.6342377,3.09245554 L21.4574659,25.5050253 L21.2968535,25.3315828 L20.3607393,24.4106745 L20.200602,24.237232 L38.3502882,1.8246623 C38.4177644,1.77191678 38.4842903,1.74530642 38.5512914,1.74530642 L38.5512914,1.74530642 Z M38.5512914,0.998315803 C38.2837623,0.998315803 38.0295384,1.1052324 37.8290104,1.30528523 L19.6127983,23.7572953 C19.532492,23.7173798 19.4521858,23.7040746 19.3718795,23.6907694 C19.1846567,23.6774642 18.9846039,23.7173798 18.810211,23.8376015 L18.0080989,24.357929 L17.8479616,24.1844865 L16.0294291,22.3835358 C15.6283731,21.9967353 15.0937901,21.756767 14.5454268,21.7030711 C14.0108438,21.6498504 13.4491753,21.769597 12.9811182,22.0765664 L7.78021973,25.558246 C7.65999796,25.4784149 7.51269065,25.424719 7.36585852,25.4114138 C7.13824497,25.3848035 6.92441178,25.4380242 6.72388376,25.558246 L4.97235232,26.7324278 C4.78512948,26.8521744 4.63782217,27.0793128 4.62499218,27.3059759 C4.611687,27.4661132 4.66490771,27.6395557 4.75851913,27.7863878 L0.961316804,30.3343291 C0.78739914,30.4545509 0.760788787,30.7482152 0.908096098,30.9083525 L1.45645944,31.4419851 L3.08776911,33.0694933 C3.10107429,33.0827984 3.10107429,33.0827984 3.11437946,33.0961036 L14.2517625,44.1954719 L14.7863455,44.7419345 C14.946958,44.8892418 15.2410974,44.8621563 15.3613192,44.6887138 L17.9154379,40.9138452 C18.0489648,41.0069814 18.2361877,41.0468969 18.396325,41.0335917 C18.6239385,41.0207617 18.8377717,40.8867596 18.9712987,40.7004871 L20.1345513,38.939452 C20.3483844,38.6058722 20.3350793,38.2057666 20.1345513,37.885492 L23.624309,32.695998 C24.2391982,31.7617845 24.1189764,30.4545509 23.3301695,29.6676448 L21.511637,27.8533889 L21.3381945,27.6937268 L21.8727775,26.8930403 C22.0466952,26.6392916 22.0604755,26.3461025 21.9397786,26.0790486 L40.1564659,3.62656334 C40.5579971,3.22645767 40.5579971,2.55929811 40.1564659,2.15919245 L39.2878279,1.29198005 C39.0863496,1.09145204 38.8188205,0.998315803 38.5512914,0.998315803 L38.5512914,0.998315803 Z'
                  id='Fill-1'
                  stroke='#010165'
                  strokeWidth='0.5'
                  transform='translate(20.635004, 22.917900) rotate(-2.000000) translate(-20.635004, -22.917900) '
                />
              </g>
            </g>
          </g>
        </svg>
        <h1 className='robot-title'>MR ROBOT</h1>
      </div>

      <div className='title-row'>
        <img
          src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg'
          alt='star'
        />
        <p className='instructions-title'>Instructions</p>
        <img
          src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg'
          alt='star'
        />
      </div>

      <table className='instructions-row'>
        <tbody>
          <tr>
            <td className='instructions-number'>1</td>
            <td className='instructions-text'>
              Hiding behind one of these doors is Mr Robot.
            </td>
          </tr>
          <tr>
            <td className='instructions-number'>2</td>
            <td className='instructions-text'>
              Your mission is to open all of the doors without running into Mr
              Robot.
            </td>
          </tr>
          <tr>
            <td className='instructions-number'>3</td>
            <td className='instructions-text'>
              If you manage to avoid Mr Robot until you open the very last door,
              you win!
            </td>
          </tr>
          <tr>
            <td className='instructions-number'>4</td>
            <td className='instructions-text'>
              See if you can score a winning streak!
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className='streak'>
        Your current winning streak is: <span className='streak-value'>0</span>
      </h2>
      <div className='door-row'>
        <img
          id='door1'
          className='door-frame'
          src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
          alt='closed door'
        />
        <img
          id='door2'
          className='door-frame'
          src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
          alt='closed door'
        />
        <img
          id='door3'
          className='door-frame'
          src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
          alt='closed door'
        />
      </div>

      <div id='start' className='start-row'>
        Good luck!
      </div>
    </section>
  );
};

export default MrRobot;

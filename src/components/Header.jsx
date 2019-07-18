import React from 'react';
import Image from "./Image";
import Logic from '../img/Logic.png';
import { Tween, Timeline } from 'react-gsap';
import { Power2 } from 'gsap';

const Header = () => {
  return (
    <Timeline
      target={
        <div>
          <Image
            src={Logic}
            alt="Logic"
          />
        </div>
      }
    >
      <Tween from={{ opacity: 0 }} to={{ opacity: 1, ease: Power2.easeInOut }} />
      <Tween to={{ x: '50px' }} />
    </Timeline>
  );
}

export default Header;
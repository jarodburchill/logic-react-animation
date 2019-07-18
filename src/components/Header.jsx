import React from 'react';
import Image from "./Image";
import Logic from '../img/Logic.png';
import { Tween, Timeline } from 'react-gsap';
import { Power2 } from 'gsap';

const Header = () => {
  return (
    <Timeline
      target={
        <div className="header">
          <Image
            src={Logic}
            alt="Logic"
          />
        </div>
      }
      duration={1}
    >
      <Tween from={{ y: "75%" }} to={{ y: "0%", ease: Power2.easeInOut }} />
    </Timeline>
  );
}

export default Header;
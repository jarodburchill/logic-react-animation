import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Power2 } from 'gsap';

const Image = (props) => {
  let startX;
  if (props.index % 2 === 0) {
    startX = "-200%";
  }
  else {
    startX = "200%"
  }
  return (
    <Timeline
      target={
        <div>
          <img src={props.src} alt={props.alt} className={props.alt} />
        </div>
      }
      duration={1.5}
    >
      <Tween from={{ x: startX }} to={{ x: "0%", ease: Power2.easeInOut }} />
      <Tween from={{ y: "75%" }} to={{ y: "0%", ease: Power2.easeInOut }} />
    </Timeline>
  );
}

export default Image;
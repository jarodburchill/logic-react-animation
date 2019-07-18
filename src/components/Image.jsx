import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Power2 } from 'gsap';

const Image = (props) => {
  if (props.index % 2 === 0) {
    return (
      <Timeline
        target={
          <div>
            <img src={props.src} alt={props.alt} className={props.alt} />
          </div>
        }
        duration={1.5}
      >
        <Tween from={{ x: "-200%" }} to={{ x: "0%", ease: Power2.easeInOut }} />
        <Tween from={{ y: "75%" }} to={{ y: "0%", ease: Power2.easeInOut }} />
      </Timeline>
    );
  }
  else {
    return (
      <Timeline
        target={
          <div>
            <img src={props.src} alt={props.alt} className={props.alt} />
          </div>
        }
        duration={1.5}
      >
        <Tween from={{ x: "200%" }} to={{ x: "0%", ease: Power2.easeInOut }} />
        <Tween from={{ y: "75%" }} to={{ y: "0%", ease: Power2.easeInOut }} />
      </Timeline>
    );
  }
}

export default Image;
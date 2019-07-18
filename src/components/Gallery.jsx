import React from 'react';
import Image from './Image';
import UP from '../img/UP.jpg';
import UPDeluxe from '../img/UPDeluxe.jpg';
import TheIncredibleTrueStory from '../img/TheIncredibleTrueStory.jpg';
import BT from '../img/BT.jpg';
import Everybody from "../img/Everybody.jpg";
import BT2 from "../img/BT2.jpg";
import YSIV from "../img/YSIV.jpg";
import COADM from "../img/COADM.jpg";

const Gallary = () => {
  const images = [
    {
      src: UP,
      alt: "UnderPressure"
    },
    {
      src: UPDeluxe,
      alt: "UnderPressureDeluxe"
    },
    {
      src: TheIncredibleTrueStory,
      alt: "TheIncredibleTrueStory"
    },
    {
      src: BT,
      alt: "BobbyTarantino"
    },
    {
      src: Everybody,
      alt: "Everybody"
    },
    {
      src: BT2,
      alt: "BobbyTarantinoII"
    },
    {
      src: YSIV,
      alt: "YSIV"
    },
    {
      src: COADM,
      alt: "ConfessionsOfADangerousMind"
    }
  ]
  return (
    <div className="gallery">
      {images.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </div>
  );
}

export default Gallary;
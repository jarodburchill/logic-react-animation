import React from 'react';

const Image = (props) => {
  console.log(props.src)
  return (
    <img src={props.src} alt={props.alt} />
  );
}

export default Image;
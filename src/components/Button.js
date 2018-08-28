import React from 'react';

import arrow from '../../static/img/arrow.png';

const Button = ({ text, link, images, diapositive, size }) => {
  return (
    <a
      className="btn"
      href={link}
      data-size={size}
      data-diapositive={diapositive}
    >
      <p className="btn__text">{text}</p>
    </a>
  );
};

const ButtonPoint = ({ text, link }) => {
  return (
    <a className="btn" data-type="point" href={link}>
      <p className="btn__text">{text}</p>
      <img className="btn__arrow" src={arrow} alt="arrow" />
    </a>
  );
};

const ButtonLarge = ({ text, link, handler }) => {
  return (
    <a className="btn" data-type="large" href={link} onClick={handler}>
      <p className="btn__text">{text}</p>
    </a>
  );
};

const ButtonImage = ({ text, link, images }) => {
  return (
    <a className="btn" data-type="image" href={link}>
      <img
        className="btn__img"
        src={images.normal.relativePath}
        role="presentation"
      />
      <img
        className="btn__img btn__img--hover"
        src={images.inverse.relativePath}
        role="presentation"
      />
      <p className="btn__text">{text}</p>
    </a>
  );
};

export default props => {
  if (props.type === 'point') return <ButtonPoint {...props} />;
  if (props.type === 'image') return <ButtonImage {...props} />;
  if (props.type === 'large') return <ButtonLarge {...props} />;
  return <Button {...props} />;
};

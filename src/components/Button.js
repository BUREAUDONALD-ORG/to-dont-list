import React from 'react';

import arrow from '../../static/img/arrow.png';

const Button = ({ text, size, link }) => {
  return (
    <a className="btn" href={link} data-size={size}>
      <p className="btn__text">{text}</p>
    </a>
  );
};

const ButtonPoint = ({ text, link }) => {
  return (
    <a className="btn" type="point" href={link}>
      <p className="btn__text">{text}</p>
      <img className="btn__arrow" src={arrow} alt="arrow" />
    </a>
  );
};

export default ({ type, text }) => {
  if (type === 'point') return <ButtonPoint text={text} />;
  return <Button text={text} size="large" />;
};

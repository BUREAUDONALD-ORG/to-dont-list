import React from 'react';

import arrow from '../../static/img/arrow.png';

const Button = () => {
  return <div />;
};

const ButtonPoint = ({ text }) => {
  return (
    <div className="btn" type="point">
      <div className="btn__text">{text}</div>
      <img className="btn__arrow" src={arrow} alt="arrow" />
    </div>
  );
};

export default ({ type, text }) => {
  if (type === 'normal') return <Button text={text} />;
  if (type === 'point') return <ButtonPoint text={text} />;
};

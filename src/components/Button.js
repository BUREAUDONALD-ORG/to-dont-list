import React from 'react';

import arrow from '../../static/img/arrow.png';

const Button = ({ text, size, link, diapositive }) => {
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
    <a className="btn" type="point" href={link}>
      <p className="btn__text">{text}</p>
      <img className="btn__arrow" src={arrow} alt="arrow" />
    </a>
  );
};

export default props => {
  if (props.type === 'point') return <ButtonPoint text={text} />;
  return <Button {...props} />;
};

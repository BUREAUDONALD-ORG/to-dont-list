import React from 'react';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import slugify from 'slugify';

import arrow from '../../static/img/arrow.png';

export default ({ product, toggleProducts }) => {
  return (
    <ScrollLink
      className="checkbox"
      data-checked={product.checkbox.visible}
      activeClass="checkbox__active"
      to={slugify(product.checkbox.title)}
      spy={true}
      smooth={true}
      offset={-600}
      duration={500}
      isDynamic
    >
      <input
        className="checkbox__input"
        type="checkbox"
        checked={product.checkbox.visible}
        readOnly
      />
      <label
        className="checkbox__label"
        onClick={toggleProducts.bind(this, product)}
      >
        <div className="checkbox__content">
          <h2 className="checkbox__title">{product.checkbox.title}</h2>
          <h3 className="checkbox__text">{product.checkbox.text}</h3>
        </div>
      </label>
    </ScrollLink>
  );
};

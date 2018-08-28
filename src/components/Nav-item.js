import React from 'react';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import slugify from 'slugify';

import arrow from '../../static/img/arrow.png';

export default ({ product, toggleProducts, sticky }) => {
  return (
    <ScrollLink
      className="navbar__item"
      data-checked={product.checkbox.visible}
      activeClass="navbar__item--active"
      to={slugify(product.checkbox.title)}
      spy={true}
      smooth={true}
      offset={-300}
      duration={500}
      isDynamic
    >
      <h2 className="navbar__item-title">{product.checkbox.title}</h2>
      <h2 className="navbar__item-title navbar__item-title--responsive">
        {product.checkbox.text}
      </h2>
    </ScrollLink>
  );
};

import React from 'react';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import slugify from 'slugify';

import arrow from '../../static/img/arrow.png';

const NavItem = ({ product, toggleProducts, sticky }) => {
  return (
    <div className="navbar__item">
      <h2 className="navbar__item-title">{product.checkbox.title}</h2>
    </div>
  );
};

export default ({ product, toggleProducts, sticky }) => {
  return (
    <ScrollLink
      className="navbar__item-container"
      data-checked={product.checkbox.visible}
      activeClass="navbar__item--active"
      to={slugify(product.checkbox.title)}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      isDynamic
    >
      <NavItem
        product={product}
        toggleProducts={toggleProducts}
        sticky={sticky}
      />
    </ScrollLink>
  );
};

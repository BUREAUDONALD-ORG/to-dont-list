import React from 'react';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import slugify from 'slugify';

import arrow from '../../static/img/arrow.png';

const Checkbox = ({ product, toggleProducts, sticky }) => {
  return (
    <div>
      <input
        className="checkbox__input"
        type="checkbox"
        checked={product.checkbox.visible}
        readOnly
      />
      <label className="checkbox__label">
        <div className="checkbox__content">
          <h2 className="checkbox__title">{product.checkbox.title}</h2>
          <h3 className="checkbox__text">{product.checkbox.text}</h3>
        </div>
      </label>
    </div>
  );
};

export default ({ product, toggleProducts, sticky }) => {
  return (
    <div
      className="checkbox"
      onClick={toggleProducts.bind(this, product, sticky)}
    >
      <Checkbox
        product={product}
        toggleProducts={toggleProducts}
        sticky={sticky}
      />
    </div>
  );
};

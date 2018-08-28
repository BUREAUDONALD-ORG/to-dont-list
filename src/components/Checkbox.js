import React from 'react';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import slugify from 'slugify';

import arrow from '../../static/img/arrow.png';

export default ({ product, toggleProducts, disabled, ...rest }) => {
  return (
    <div
      className="checkbox"
      onClick={toggleProducts.bind(this, product)}
      {...rest}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        checked={product.checkbox.visible}
        readOnly
      />
      <label className="checkbox__label" disabled={disabled}>
        <div className="checkbox__icon-container">
          <p className="checkbox__number">
            {product.checkbox.visible > 0 && product.checkbox.visible}
          </p>
        </div>
        <div className="checkbox__content">
          <h3 className="checkbox__title">
            {product.checkbox.visible} {product.checkbox.title}
          </h3>
          <h3 className="checkbox__text">{product.checkbox.text}</h3>
        </div>
      </label>
    </div>
  );
};

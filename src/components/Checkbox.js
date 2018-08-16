import React from 'react';
import cx from 'classnames';

import arrow from '../../static/img/arrow.png';

export default ({ product, toggleProducts }) => {
  return (
    <div
      onClick={toggleProducts.bind(this, product)}
      className={cx({ checkbox: true })}
    >
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

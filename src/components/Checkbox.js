import React from 'react';
import cx from 'classnames';

import arrow from '../../static/img/arrow.png';

export default ({ product, toggleProducts }) => {
  return (
    <div
      onClick={toggleProducts.bind(this, product)}
      className={cx({ checkbox: true })}
    >
      <div>
        <input type="checkbox" checked={product.checkbox.visible} />
      </div>
      <div>
        <h2 className="checkbox__title">{product.checkbox.title}</h2>
        <pre>
          <h3 className="checkbox__text">{product.checkbox.text}</h3>
        </pre>
      </div>
    </div>
  );
};

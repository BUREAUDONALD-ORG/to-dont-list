import React from 'react';

export default ({ product, toggleProducts, disabled, ...rest }) => {
  return (
    <div
      className="checkbox"
      onClick={!disabled ? toggleProducts.bind(this, product) : animate => {}}
      {...rest}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        value={product.checkbox.visible}
      />
      <label className="checkbox__label" disabled={disabled}>
        <div className="checkbox__icon-container">
          <p className="checkbox__number">
            {product.checkbox.visible > 0 && product.checkbox.visible}
          </p>
        </div>
        <div className="checkbox__content">
          <h3 className="checkbox__title">{product.checkbox.title}</h3>
          <h3 className="checkbox__text">{product.checkbox.text}</h3>
        </div>
      </label>
    </div>
  );
};

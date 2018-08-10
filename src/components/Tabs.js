import React from 'react';
import cx from 'classnames';

import arrow from '../../static/img/arrow.png';

const Tab = ({ product, active, toggleProducts }) => {
  return (
    <div
      className={cx({ tab: true, 'tab--active': active })}
      onClick={toggleProducts.bind(this, product.id)}
    >
      <div>
        <h2 className="tab__title">{product.checkboxTitle}</h2>
        <pre>
          <h3 className="tab__subtitle">{product.checkboxText}</h3>
        </pre>
        {active && 'active'}
      </div>
    </div>
  );
};

export default class Tabs extends React.Component {
  render() {
    return (
      <div id="tools" className="layout__tabs">
        <div className="tab__container">
          {this.props.products.map((product, key) => {
            let productData = product.node.frontmatter;
            console.log(this.props.activeProducts, productData);
            return (
              <Tab
                key={key}
                product={productData}
                active={this.props.activeProducts[productData.id]}
                toggleProducts={this.props.toggleProducts}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

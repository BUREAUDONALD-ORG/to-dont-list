import React from 'react';
import cx from 'classnames';

import arrow from '../../static/img/arrow.png';

const Tab = ({ product, key, active }) => {
  product = product.node.frontmatter;
  return (
    <div
      key={key}
      className={cx({ tab: true, 'tab--active': active })}
      onClick={() => {}}
    >
      {active ? (
        <pre>
          <h2 className="tab__big-title">{product.checkboxTitle}</h2>
        </pre>
      ) : (
        <div>
          <h2 className="tab__title">{product.checkboxTitle}</h2>
          <pre>
            <h3 className="tab__subtitle">{product.checkboxText}</h3>
          </pre>
        </div>
      )}
      {active && <img className="tab__arrow" role="presentation" src={arrow} />}
    </div>
  );
};

export default class Tabs extends React.Component {
  render() {
    console.log(this.props.products);
    return (
      <div id="tools" className="layout__tabs">
        <div className="tab__container">
          {this.props.products.map((product, key) => {
            return <Tab key={key} product={product} active={false} />;
          })}
        </div>
      </div>
    );
  }
}

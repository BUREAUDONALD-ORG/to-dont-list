import React from 'react';

import line from '../../static/img/line.png';
import lineHz from '../../static/img/line-hz.png';

export default class Header extends React.Component {
  render() {
    let site = this.props.data;
    return (
      <header className="layout__header">
        <div className="header">
          <div className="header__section">
            <pre>
              <h1 className="header__title">{site.siteTitle}</h1>
            </pre>
            <nav>
              <ul className="nav__list">
                {site.nav.map((navItem, key) => (
                  <li key={key} className="nav__item">
                    <a data-scroll href={navItem.link}>
                      {navItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <img className="header__line" src={line} role="presentation" />
          <img className="header__line-hz" src={lineHz} role="presentation" />
          <div className="header__section">
            <pre>
              <h3 className="header__subtitle">{site.subTitle}</h3>
            </pre>
            <h4 className="header__author">
              {site.authorPrefix}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={site.authorLink}
              >
                {site.author}
              </a>
            </h4>
          </div>
        </div>
      </header>
    );
  }
}
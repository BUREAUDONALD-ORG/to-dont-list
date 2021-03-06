import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import line from '../assets/images/line.png'
import lineHz from '../assets/images/line-hz.png'
import site from '../content/site.md'

export default class Header extends React.Component {
  render () {
    return (
      <header className="layout__header">
        <div className="header">
          <div className="header__section">
            <pre><h1 className="header__title">{site.siteTitle}</h1></pre>
            <nav>
              <ul className="nav__list">
                {site.nav.map((navItem, key) => (
                  <li key={key} className="nav__item">
                    <a data-scroll href={navItem.link}>{navItem.title}</a>
                  </li>)
                )}
              </ul>
            </nav>
          </div>
          <img
            className="header__line"
            src={prefixLink(line)}
            role="presentation"
          />
          <img
            className="header__line-hz"
            src={prefixLink(lineHz)}
            role="presentation"
          />
          <div className="header__section">
            <pre><h3 className="header__subtitle">{site.subTitle}</h3></pre>
            <h4 className="header__author">
              {site.authorPrefix}
              <a rel="noopener noreferrer" target="_blank" href={site.authorLink}>
                {site.author}
              </a>
            </h4>
          </div>
        </div>
      </header>
    )
  }
}

import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

import "styles/app.scss";
import line from '../assets/images/line.png'
import header from '../content/header.yaml';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="layout__app">
        <header className="layout__header">
          <div className="header__section">
            <pre><h1 className="header__title">{header.siteTitle}</h1></pre>
            <nav>
              <ul className="nav__list">
                {header.nav.map((navItem, key)=>{
                  return <li key={key} className="nav__item">{navItem.title}</li>
                })}
              </ul>
            </nav>
          </div>
          <img className="header__line" src={line} />
          <div className="header__section">
            <pre><h3 className="header__subtitle">{header.subTitle}</h3></pre>
            <h4 className="header__author">{header.authorPrefix} {header.author}</h4>
          </div>
        </header>
        {this.props.children}
      </div>
    )
  },
})

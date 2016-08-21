import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

import "styles/app.scss";
import line from '../assets/images/line.png'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="layout__app">
        <aside className="layout__sidebar">
          <header>
            <h1 className="header__title"> {config.siteTitle} </h1>
            <img className="header__line" src={line} />
            <h3 className="header__subtitle"> Time management for creative people </h3>
            <h4 className="header__author"> by Donald Roos </h4>
          </header>
          <nav>
            <ul className="nav__list">
              <li className="nav__item">Menu</li>
              <li className="nav__item">About</li>
              <li className="nav__item">Contact</li>
            </ul>
          </nav>
        </aside>
        {this.props.children}
      </div>
    )
  },
})

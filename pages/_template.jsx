import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

import "styles/app.scss";
import line from '../assets/images/line.png'
import sidebar from '../content/sidebar.yaml';

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
            <h1 className="header__title"> {sidebar.siteTitle} </h1>
            <nav>
              <ul className="nav__list">
                {sidebar.nav.map((navItem, key)=>{
                  return <li key={key} className="nav__item">{navItem.title}</li>
                })}
              </ul>
            </nav>
          </div>
          <img className="header__line" src={line} />
          <div className="header__section">
            <h3 className="header__subtitle">{sidebar.subTitle}</h3>
            <h4 className="header__author">{sidebar.authorPrefix} {sidebar.author}</h4>
          </div>
        </header>
        {this.props.children}
      </div>
    )
  },
})

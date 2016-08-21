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
        <aside className="layout__sidebar">
          <header>
            <h1 className="header__title"> {sidebar.siteTitle} </h1>
            <img className="header__line" src={line} />
            <h3 className="header__subtitle">{sidebar.subTitle}</h3>
            <h4 className="header__author">{sidebar.authorPrefix} {sidebar.author}</h4>
          </header>
          <nav>
            <ul className="nav__list">
              {sidebar.nav.map((navItem, key)=>{
                return <li key={key} className="nav__item">{navItem.title}</li>
              })}
            </ul>
          </nav>
        </aside>
        {this.props.children}
      </div>
    )
  },
})

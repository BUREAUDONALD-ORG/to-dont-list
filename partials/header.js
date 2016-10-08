import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import line from '../assets/images/line.png'
import site from '../content/site.md';

export default class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header__section">
          <pre><h1 className="header__title">{site.siteTitle}</h1></pre>
          <nav>
            <ul className="nav__list">
              {site.nav.map((navItem, key)=>{
                return <li key={key} className="nav__item"><a data-scroll href={navItem.link}>{navItem.title}</a></li>
              })}
            </ul>
          </nav>
        </div>
        <img className="header__line" src={prefixLink(line)} />
        <div className="header__section">
          <pre><h3 className="header__subtitle">{site.subTitle}</h3></pre>
          <h4 className="header__author"><a href={site.authorLink} > {site.authorPrefix} {site.author}</a></h4>
        </div>
      </div>
    )
  }
}
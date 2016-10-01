import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

import "styles/app.scss";

import line from '../assets/images/line.png'
import header from '../content/header.yaml';

import app from '../content/app.md';
import book from '../content/book.md';
import workshop from '../content/workshop.md';

import Form from '../partials/form.js'

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
        <main className="layout__main">
          <div className="tab__container">
            {[app, book].map((project, key)=>{
              return <div key={key} className="tab" onClick={()=>{}}>
                <h3 className="tab__title"> { project.title }</h3>
                <h2 className="tab__subtitle"> { project.subtitle }</h2>
              </div>
            })}
            <div key={3} className="tab" onClick={()=>{}}>
              <pre><h3 className="tab__workshop-title">{ workshop.title }</h3></pre>
            </div>
          </div>
        </main>
        <article className="layout__viewer">
          {this.props.children}
        </article>
        <div className="layout__form">
          <Form />
        </div>
        <div className="layout__social">
        </div>
        <div className="layout__credits">
        </div>
      </div>
    )
  },
})

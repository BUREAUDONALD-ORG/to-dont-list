import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

import "styles/app.scss";

import line from '../assets/images/line.png'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'

import site from '../content/site.md';
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
            <pre><h1 className="header__title">{site.siteTitle}</h1></pre>
            <nav>
              <ul className="nav__list">
                {site.nav.map((navItem, key)=>{
                  return <li key={key} className="nav__item">{navItem.title}</li>
                })}
              </ul>
            </nav>
          </div>
          <img className="header__line" src={line} />
          <div className="header__section">
            <pre><h3 className="header__subtitle">{site.subTitle}</h3></pre>
            <h4 className="header__author">{site.authorPrefix} {site.author}</h4>
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
          <div className="social__hashtag">
            {site.hashtag}
            <span className="social__hashtag-dot"></span>
          </div>
          <div className="social__text-container">
            <p className="social__text">{site.socialText[0]}</p> 
            <p className="social__text">{site.socialText[1]}</p> 
          </div>
          <div className="social__button-container">
            {site.socialbtn.map((btn, key)=>{
              return <div key={key} className="social__button">
                <img className="social__button-img" src={ key ? instagram : twitter } />
                <h1 className="social__button-text">{btn.text}</h1>
              </div>
            })}
          </div>
        </div>
        <div className="layout__credits">
          <h1 className="credits__title">{site.creditsTitle}</h1>
          <p className="credits__text" dangerouslySetInnerHTML={{ __html: site.body }}></p>
        </div>
      </div>
    )
  },
})

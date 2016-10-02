import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

if (typeof document != "undefined"){ 
  var smoothScroll = require('smooth-scroll');
}

import "styles/app.scss";

import lineHz from '../assets/images/line-hz.png'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'

import site from '../content/site.md';

import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'

export default class Mobile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: "header"
    }
  }

  changeView (view) {
    this.setState({view: view});
  }

  componentDidMount () {
    if (typeof document != "undefined"){ 
      smoothScroll.init();
    }
  }

  render () {
    let view = this.state.view;
    console.log("view: ", view)
    return (
      <div className="layout__app">
        <header className="layout__header" style={(()=>{return ((view == "header") ? {display: "flex"} : {display: "none"})})()}>
          <div className="header__main">
            <div className="header__section">
              <pre><h1 className="header__title">{site.siteTitle}</h1></pre>
            </div>
            <img className="header__line" src={lineHz} />
            <div className="header__section">
              <pre><h3 className="header__subtitle">{site.subTitle}</h3></pre>
              <h4 className="header__author"><a href={site.authorLink} > {site.authorPrefix} {site.author}</a></h4>
            </div>
          </div>
          <div className="header__nav">
            <img className="nav__arrow" src={arrowRight} onClick={this.changeView.bind(this, "overview")}/>
          </div>
        </header>
        {this.props.children}
        <div id="social" className="layout__social">
          <a href={site.hashtagLink} className="social__hashtag">
            {site.hashtag}
            <span className="social__hashtag-dot"></span>
          </a>
          <div className="social__text-container">
            <p className="social__text">{site.socialText[0]}</p> 
            <p className="social__text">{site.socialText[1]}</p> 
          </div>
          <div className="button__container">
            {site.socialbtn.map((btn, key)=>{
              return <a href={btn.link} key={key} className="button">
                <img className="button__img" src={ key ? instagram : twitter } />
                <h1 className="button__text">{btn.text}</h1>
              </a>
            })}
          </div>
        </div>
        <div id="credits" className="layout__credits">
          <h1 className="credits__title">{site.creditsTitle}</h1>
          <div className="credits__text" dangerouslySetInnerHTML={{ __html: site.body }}></div>
        </div>
      </div>
    )
  }
}
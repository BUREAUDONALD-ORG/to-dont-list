import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import site from '../content/site.md';

export default class Social extends React.Component {
  render () {
    return (
      <div className="social">
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
    )
  }
}
import React from 'react'

import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import site from '../content/site.md'

export default class Social extends React.Component {
  render () {
    return (
      <div id="social" className="layout__social">
        <div className="social">
          <a href={site.hashtagLink} className="social__hashtag">
            {site.hashtag}
            <span className="social__hashtag-dot" />
          </a>
          <div className="social__text-container">
            <p className="social__text">{site.socialText[0]}</p>
            <p className="social__text">{site.socialText[1]}</p>
          </div>
          <div className="button__container">
            {site.socialbtn.map((btn, key) => (
              <a href={btn.link} key={key} className="button">
                <img
                  className="button__img"
                  src={key ? instagram : twitter}
                  alt={key ? 'Instagram' : 'Twitter'}
                />
                <h1 className="button__text">{btn.text}</h1>
              </a>
            )) }
          </div>
        </div>
      </div>
    )
  }
}

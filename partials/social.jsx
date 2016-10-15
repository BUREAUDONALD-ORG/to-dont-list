import React from 'react'

import twitter from '../assets/images/twitter.svg'
import twitterPink from '../assets/images/twitter-pink.svg'
import instagram from '../assets/images/instagram.svg'
import instagramPink from '../assets/images/instagram-pink.svg'
import tag from '../assets/images/tag.svg'

import site from '../content/site.md'

export default class Social extends React.Component {
  render () {
    return (
      <div id="social" className="layout__social">
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={site.hashtagLink}
            className="social__hashtag"
          >
            <img src={tag} alt="#ToDontList" className="social__hashtag" />
          </a>
          <div className="social__text-container">
            <p className="social__text">{site.socialText[0]}</p>
            <p className="social__text">{site.socialText[1]}</p>
          </div>
          <div className="button__container">
            {site.socialbtn.map((btn, key) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={btn.link}
                key={key}
                className="button"
              >
                <img
                  className="button__img"
                  src={key ? instagram : twitter}
                  role="presentation"
                />
                <img
                  className="button__img button__img--hover"
                  src={key ? instagramPink : twitterPink}
                  role="presentation"
                />
                <h1 className="button__text">{btn.text}</h1>
              </a>
            )) }
            <div className="social__placeholder" />
          </div>
        </div>
      </div>
    )
  }
}

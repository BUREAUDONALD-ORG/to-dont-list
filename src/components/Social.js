import React from 'react';

import twitter from '../../static/img/twitter.svg';
import twitterPink from '../../static/img/twitter-pink.svg';
import instagram from '../../static/img/instagram.svg';
import instagramPink from '../../static/img/instagram-pink.svg';
import tag from '../../static/img/tag.svg';

export default class Social extends React.Component {
  render() {
    let site = this.props.data;
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
            ))}
            <div className="social__placeholder" />
          </div>
        </div>
      </div>
    );
  }
}

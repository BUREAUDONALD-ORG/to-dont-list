import React from 'react';
import Img from 'gatsby-image';

export default class Social extends React.Component {
  render() {
    let site = this.props.data;
    return (
      <div id="social" className="layout__social">
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={site.hashtag.link}
            className="social__hashtag"
          >
            <img
              src={site.hashtag.image.relativePath}
              alt="#ToDontList"
              className="social__hashtag"
            />
          </a>
          <div className="social__text-container">
            <p className="social__text">{site.socialText[0]}</p>
            <p className="social__text">{site.socialText[1]}</p>
          </div>
          <div className="button__container">
            {site.socialbtn.map((btn, key) => {
              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={btn.link}
                  key={key}
                  className="button"
                >
                  <img
                    className="button__img"
                    src={btn.image.relativePath}
                    role="presentation"
                  />
                  <img
                    className="button__img button__img--hover"
                    src={btn.imageInverse.relativePath}
                    role="presentation"
                  />
                  <h1 className="button__text">{btn.text}</h1>
                </a>
              );
            })}
            <div className="social__placeholder" />
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import Img from 'gatsby-image';

export default ({ product }) => {
  return (
    <article id="viewer" className="layout__viewer">
      <div className="viewer viewer--app">
        <div>
          <pre>
            <h1 className="viewer__title">{product.frontmatter.title}</h1>
          </pre>
          <div
            className="viewer__content viewer__content--app"
            dangerouslySetInnerHTML={{ __html: product.html }}
          />
          <div className="button__container">
            <div className="button button--wide">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.frontmatter.link}
              >
                <h1 className="button__text">{product.frontmatter.linkText}</h1>
              </a>
            </div>
          </div>
        </div>
        <div className="viewer__iphone-container">
          <Img sizes={product.frontmatter.image.childImageSharp.sizes} />
        </div>
      </div>
    </article>
  );
};

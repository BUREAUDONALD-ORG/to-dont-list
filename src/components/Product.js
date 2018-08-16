import React from 'react';
import Img from 'gatsby-image';

import Button from './Button.js';

export default ({ product }) => {
  return (
    <article className="product">
      <div className="product__content">
        <pre>
          <h1 className="product__title">{product.frontmatter.title}</h1>
        </pre>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: product.html }}
        />
        <Button text={product.frontmatter.button.text} />
      </div>

      <div className="product__image">
        <Img sizes={product.frontmatter.images.default.childImageSharp.sizes} />
      </div>
    </article>
  );
};

import React from 'react'
import Img from 'gatsby-image'

import test from '../../static/img/book-3-compressed-ultra.png'

export default ({ diapositive, images }) => {
  return (
    <div className="product__image">
      {window.innerWidth < 800
        ? images &&
          images.mobile && (
            // <Img
            //   sizes={images.mobile.childImageSharp.sizes}
            //   className="product__image-inner"
            // />
            <img
              src={images.mobile.childImageSharp.sizes.src}
              className="product__image-inner"
            />
          )
        : (!diapositive &&
            images &&
            images.default && (
              // <Img
              //   sizes={images.default.childImageSharp.sizes}
              //   className="product__image-inner"
              // />
              <img
                src={images.default.childImageSharp.sizes.src}
                className="product__image-inner"
              />
            )) ||
          (diapositive &&
            images &&
            images.diapositive && (
              // <Img
              //   sizes={images.diapositive.childImageSharp.sizes}
              //   className="product__image-inner"
              // />
              <img
                src={images.diapositive.childImageSharp.sizes.src}
                className="product__image-inner"
              />
            ))}
    </div>
  )
}

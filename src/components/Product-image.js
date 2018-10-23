import React from 'react'
import Img from 'gatsby-image'

export default ({ images }) => {
  return (
    <div className="product__image" data-align={images.align && images.align}>
      {images &&
        images.default &&
        images.diapositive && (
          <Img
            sizes={
              !images.diapositive
                ? images &&
                  images.default &&
                  images.default.childImageSharp.sizes
                : images &&
                  images.diapositive &&
                  images.diapositive.childImageSharp.sizes
            }
          />
        )}
    </div>
  )
}

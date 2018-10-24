import React from 'react'
import Img from 'gatsby-image'

export default ({ diapositive, images }) => {
  return (
    <div className="product__image" data-align={images.align && images.align}>
      {!diapositive &&
        images &&
        images.default && <Img sizes={images.default.childImageSharp.sizes} />}
      {diapositive &&
        images &&
        images.diapositive && (
          <Img sizes={images.diapositive.childImageSharp.sizes} />
        )}
    </div>
  )
}

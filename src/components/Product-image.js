import React from 'react'
import Img from 'gatsby-image'

import test from '../../static/img/book-3-compressed-ultra.png'

export default ({ diapositive, images }) => {
  let currImage =
    images && window.innerWidth < 800
      ? images.mobile && images.mobile.childImageSharp.sizes
      : !diapositive
        ? images.default && images.default.childImageSharp.sizes
        : images.diapositive && images.diapositive.childImageSharp.sizes

  console.log(currImage)
  return (
    <div className="product__image">
      {currImage && (
        <Img
          sizes={currImage}
          className="product__image-inner"
          outerWrapperClassName="product__image-outer"
          imgStyle={{ width: 'unset' }}
        />
      )}
    </div>
  )
}

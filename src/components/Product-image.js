import React from 'react'
import Img from 'gatsby-image'

export default ({ diapositive, images, layout }) => {
  let currImage =
    images && window.innerWidth < 800
      ? images.mobile && images.mobile.childImageSharp.sizes
      : !diapositive
        ? images.default && images.default.childImageSharp.sizes
        : images.diapositive && images.diapositive.childImageSharp.sizes

  let imageStyle = {
    width: 'unset',
    ...(layout == 'horizontal-right' && {
      left: 'unset',
      right: 0
    })
  }

  return (
    <div className="product__image">
      {currImage && (
        <Img
          sizes={currImage}
          className="product__image-inner"
          outerWrapperClassName="product__image-outer"
          imgStyle={window.innerWidth > 800 ? imageStyle : {}}
        />
      )}
    </div>
  )
}

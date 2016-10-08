import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import site from '../content/site.md';

export default class Credits extends React.Component {
  render () {
    return (
      <div className="credits">
        <h1 className="credits__title">{site.creditsTitle}</h1>
        <div className="credits__text" dangerouslySetInnerHTML={{ __html: site.body }}></div>
      </div>
    )
  }
}
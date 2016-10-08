import React from 'react'

import site from '../content/site.md'

export default class Credits extends React.Component {
  render () {
    return (
      <div className="credits">
        <h1 className="credits__title">{site.creditsTitle}</h1>
        <div
          className="credits__text"
          dangerouslySetInnerHTML={{ __html: site.body }}
        />
      </div>
    )
  }
}

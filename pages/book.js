import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import book from '../content/book.md';
import Issuu from '../partials/issuu.js'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <pre><h1 className="viewer__title">{ book.textTitle }</h1></pre>
          <Issuu />
          <div className="viewer__content" dangerouslySetInnerHTML={{ __html: book.body }}></div>
        </div>
      </DocumentTitle>
    )
  }
}
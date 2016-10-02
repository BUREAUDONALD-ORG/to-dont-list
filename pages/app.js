import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import app from '../content/app.md';
import iphone from '../assets/images/iphone.png';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <pre><h1 className="viewer__title">{ app.textTitle }</h1></pre>
          <div className="viewer__content" dangerouslySetInnerHTML={{ __html: app.body }}></div>
          <img className="viewer__iphone" src={iphone}></img>
        </div>
      </DocumentTitle>
    )
  }
}
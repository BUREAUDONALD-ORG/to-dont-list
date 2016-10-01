import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Form from '../partials/form.js'

import app from '../content/app.md';
import book from '../content/book.md';
import workshop from '../content/workshop.md';

import marker from '../assets/images/marker.png';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <pre><h1 className="viewer__title">{ workshop.textTitle }</h1></pre>
          <div className="viewer__content" dangerouslySetInnerHTML={{ __html: workshop.body }}></div>
          <img className="viewer__img" src={marker}></img>
        </div>
      </DocumentTitle>
    )
  }
}
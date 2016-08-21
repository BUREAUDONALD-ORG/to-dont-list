import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Form from '../partials/form.js'

import app from '../content/app.md';
import book from '../content/book.md';
import workshop from '../content/workshop.md';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <main className="layout__main">
          <div className="block__container">
            <div className="block block--small">
              <h3 className="block__header"> { app.header }</h3>
              <h2 className="block__title block__title--front"> { app.frontTitle }</h2>
              <h2 className="block__title block__title--back"> { app.backTitle }</h2>
              <div className="block__text block__text--back" dangerouslySetInnerHTML={{ __html: app.body }}></div>
            </div>
            <div className="block block--small">
              <h3 className="block__header"> { book.header }</h3>
              <h2 className="block__title block__title--front"> { book.frontTitle }</h2>
              <h2 className="block__title block__title--back"> { book.backTitle }</h2>
              <div className="block__text block__text--back" dangerouslySetInnerHTML={{ __html: book.body }}></div>
            </div>
          </div>
          <div className="block block--large">
              <h3 className="block__header"> { workshop.header }</h3>
              <h2 className="block__title"> { workshop.title }</h2>
              <div className="block__text" dangerouslySetInnerHTML={{ __html: workshop.body }}></div>
            </div>
          <Form />
        </main>
      </DocumentTitle>
    )
  }
}
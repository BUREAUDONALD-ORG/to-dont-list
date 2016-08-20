import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Form from '../partials/form.js'

import firstBlock from '../content/first-block.md';
import secondBlock from '../content/second-block.md';
import thirdBlock from '../content/third-block.md';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <main className="layout__main">
          <div className="block__container">
            <div className="block block--small">
              <h3 className="block__header"> { firstBlock.header }</h3>
              <h2 className="block__front-title"> { firstBlock.title }</h2>
              <h2 className="block__back-title"> { firstBlock.hoverTitle }</h2>
              <div className="block__back-text" dangerouslySetInnerHTML={{ __html: firstBlock.body }}></div>
            </div>
            <div className="block block--small">
              <h3 className="block__header"> { secondBlock.header }</h3>
              <h2 className="block__front-title"> { secondBlock.title }</h2>
              <h2 className="block__back-title"> { secondBlock.hoverTitle }</h2>
              <div className="block__back-text" dangerouslySetInnerHTML={{ __html: secondBlock.body }}></div>
            </div>
          </div>
          <div className="block block--large">
              <h3 className="block__header"> { thirdBlock.header }</h3>
              <h2 className="block__title"> { thirdBlock.title }</h2>
              <div className="block__text" dangerouslySetInnerHTML={{ __html: thirdBlock.body }}></div>
            </div>
          <Form />
        </main>
      </DocumentTitle>
    )
  }
}
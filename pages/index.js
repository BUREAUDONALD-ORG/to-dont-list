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
          <div className="layout__delimiter">
            <div className="tab__container">
              {[app, book, workshop].map((project, key)=>{
                return <div key={key} className="tab" onClick={()=>{}}>
                  <h3 className="tab__title"> { project.title }</h3>
                  <h2 className="tab__subtitle"> { project.subtitle }</h2>
                </div>
              })}
            </div>
            <Form />
          </div>
        </main>
      </DocumentTitle>
    )
  }
}
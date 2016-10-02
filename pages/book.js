import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import book from '../content/book.md';
import Issuu from '../partials/issuu.js'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="viewer">
          <pre><h1 className="viewer__title">{ book.textTitle }</h1></pre>
          <Issuu />
          <div className="viewer__content" dangerouslySetInnerHTML={{ __html: book.body }}></div>
          <h1 className="viewer__button-header">{book.buybtnHeader}</h1>
          <div className="button__container">
            {book.buybtn.map((btn, key)=>{
              return <a href={btn.link} key={key} className="button">
                <h1 className="button__text">{btn.text}</h1>
              </a>
            })}
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
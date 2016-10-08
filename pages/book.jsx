import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Tabs from '../partials/tabs.js'

import book from '../content/book.md'
import Issuu from '../partials/issuu.jsx'

export default class Index extends React.Component {
  static propTypes () {
    return {
      route: React.PropTypes.any,
    }
  }

  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <main className="layout__main">
          <Tabs route={this.props.route} />
          <article id="viewer" className="layout__viewer">
            <div className="viewer">
              <pre><h1 className="viewer__title">{ book.textTitle }</h1></pre>
              <Issuu />
              <div
                className="viewer__content"
                dangerouslySetInnerHTML={{ __html: book.body }}
              />
              <h1 className="viewer__button-header">{book.buybtnHeader}</h1>
              <div className="button__container">
                {book.buybtn.map((btn, key) => (
                  <a href={btn.link} key={key} className="button">
                    <h1 className="button__text">{btn.text}</h1>
                  </a>
                ))}
              </div>
            </div>
          </article>
        </main>
      </DocumentTitle>
    )
  }
}

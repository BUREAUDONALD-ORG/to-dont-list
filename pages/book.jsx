import React from 'react'
import DocumentTitle from 'react-document-title'
/* eslint-disable */
import { config } from 'config'
/* eslint-enable */
import Tabs from '../partials/tabs.jsx'

import book from '../content/book.md'

export default class Book extends React.Component {
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
              <div className="viewer__book-grid">
                <div className="viewer__book-grid-section">
                  <pre><h1 className="viewer__title">{ book.textTitle }</h1></pre>
                  <div
                    className="viewer__content"
                    dangerouslySetInnerHTML={{ __html: book.body }}
                  />
                </div>
                <div className="viewer__book-grid-section">
                  { book.images.map((image, key) => {
                    const src = require(`../assets/images/${image.link}`)

                    return (
                      <img
                        src={prefixLink(src)}
                        className="viewer__book-image"
                        alt={image.text}
                        key={key}
                      />
                  ) }) }
                </div>
              </div>
              <h1 className="viewer__button-header">{book.buybtnHeader}</h1>
              <div className="button__container">
                {book.buybtn.map((btn, key) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={btn.link}
                    key={key}
                    className="button"
                  >
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

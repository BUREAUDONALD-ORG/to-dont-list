import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Tabs from '../partials/tabs.jsx'

import app from '../content/app.md'
import iphone from '../assets/images/iphone.png'

export default class App extends React.Component {
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
            <div className="viewer viewer--app">
              <div>
                <pre><h1 className="viewer__title">{ app.textTitle }</h1></pre>
                <div
                  className="viewer__content viewer__content--app"
                  dangerouslySetInnerHTML={{ __html: app.body }}
                />
                <div className="button__container">
                  <div className="button">
                    <a href={app.btn[0].link} >
                      <h1 className="button__text">
                        {app.btn[0].text}
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
              <div className="viewer__iphone-container">
                <img
                  alt="Iphone App"
                  className="viewer__iphone"
                  src={prefixLink(iphone)}
                />
              </div>
            </div>
          </article>
        </main>
      </DocumentTitle>
    )
  }
}

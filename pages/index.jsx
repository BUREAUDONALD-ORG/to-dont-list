import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Tabs from '../partials/tabs.jsx'

import workshop from '../content/workshop.md'
import marker from '../assets/images/marker.png'

export default class Index extends React.Component {
  static propTypes () {
    return {
      children: React.PropTypes.any,
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
              <pre><h1 className="viewer__title">{ workshop.textTitle }</h1></pre>
              <div
                className="viewer__content viewer__content--workshop"
                dangerouslySetInnerHTML={{ __html: workshop.body }}
              />
              <img className="viewer__marker" alt="big marker" src={marker} />
            </div>
          </article>
        </main>
      </DocumentTitle>
    )
  }
}

import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Tabs from '../partials/tabs.js'

import workshop from '../content/workshop.md';
import marker from '../assets/images/marker.png';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <Tabs route={this.props.route}/>
          <article id="viewer" className="layout__viewer">
            <div className="viewer">
              <pre><h1 className="viewer__title">{ workshop.textTitle }</h1></pre>
              <div className="viewer__content" dangerouslySetInnerHTML={{ __html: workshop.body }}></div>
              <img className="viewer__marker" src={marker}></img>
            </div>
          </article>
        </div>
      </DocumentTitle>
    )
  }
}
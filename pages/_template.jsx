import React from 'react'

import Header from '../partials/header.js'
import Form from '../partials/form.js'
import Social from '../partials/social.js'
import Credits from '../partials/credits.js'

if (typeof document != "undefined"){ 
  var smoothScroll = require('smooth-scroll');
}

import "styles/app.scss";

export default class Template extends React.Component {
  static () {
    return {
      children: React.PropTypes.any,
    }
  }

  componentDidMount () {
    if (typeof document != "undefined"){ 
      smoothScroll.init();
    }
  }

  render () {
    return (
      <div className="layout__wrapper">
        <div className="layout__app">
          <header className="layout__header">
            <Header />
          </header>
          {this.props.children}
          <div id="mail" className="layout__form">
            <Form />
          </div>
          <div id="social" className="layout__social">
            <Social />
          </div>
          <div id="credits" className="layout__credits">
            <Credits />
          </div>
        </div>
      </div>
    )
  }
}
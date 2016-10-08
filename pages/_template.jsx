import React from 'react'

import '../styles/app.scss'

import Header from '../partials/header.jsx'
import Form from '../partials/form.jsx'
import Social from '../partials/social.jsx'
import Credits from '../partials/credits.jsx'

export default class Template extends React.Component {
  static propTypes () {
    return {
      children: React.PropTypes.any,
    }
  }

  componentDidMount () {
    if (typeof document !== undefined) {
      const smoothScroll = require('smooth-scroll')

      smoothScroll.init()
    }
  }

  render () {
    return (
      <div className="layout__wrapper">
        <div className="layout__app">
          <Header />
          {this.props.children}
          <Form />
          <Social />
          <Credits />
        </div>
      </div>
    )
  }
}

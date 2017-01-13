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

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

    ga('create', 'UA-89952488-1', 'auto')
    ga('send', 'pageview')
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

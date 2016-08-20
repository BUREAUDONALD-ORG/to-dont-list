import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <aside>
          <h1> {config.siteTitle} </h1>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  },
})

import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import app from '../content/app.md'
import book from '../content/book.md'
import workshop from '../content/workshop.md'

import arrow from '../assets/images/arrow.png'
import arrowBlack from '../assets/images/arrow-black.png'

export default class Tabs extends React.Component {
  static propTypes () {
    return {
      route: React.PropTypes.any,
    }
  }

  render () {
    const route = this.props.route.path
    return (
      <div id="tools" className="layout__tabs">
        <div className="tab__container">
          {[app, book, workshop].map((project, key) => (
            <Link
              to={prefixLink(((project.link !== '') ? `/${project.link}/` : ''))}
              key={key} className="tab"
              onClick={() => {}}
            >
              <h3 className="tab__title">{project.title}</h3>
              <pre><h2 className="tab__subtitle">{project.subtitle}</h2></pre>
              {(route === ((project.link !== '') ? `/${project.link}/` : undefined)) ? (
                <img className="tab__arrow" role="presentation" src={arrow} />) : (
                <img
                  className="tab__arrow tab__arrow-black"
                  role="presentation"
                  src={arrowBlack}
                />)}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

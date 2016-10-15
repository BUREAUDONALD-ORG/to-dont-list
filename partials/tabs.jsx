import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import app from '../content/app.md'
import book from '../content/book.md'
import workshop from '../content/workshop.md'

import arrow from '../assets/images/arrow.png'

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
          {[app, book, workshop].map((project, key) => {
            const isActive = (route === `/${project.link}/` ||
              project.link === ((route === undefined) && ''))
            return (
              <Link
                to={prefixLink(((project.link !== '') ? `/${project.link}/` : ''))}
                key={key} className={cx({ tab: true, 'tab--active': isActive })}
                onClick={() => {}}
              >
                { isActive ? (
                  <pre>
                    <h2 className="tab__big-title">{project.bigTitle || project.title}</h2>
                  </pre>
                  ) : (
                    <div>
                      <h2 className="tab__title">{project.title}</h2>
                      <pre><h3 className="tab__subtitle">{project.subtitle}</h3></pre>
                    </div>
                )}
                {isActive &&
                  (<img className="tab__arrow" role="presentation" src={arrow} />)}
              </Link>
          ) })}
        </div>
      </div>
    )
  }
}

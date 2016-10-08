import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import app from '../content/app.md'
import book from '../content/book.md'
import workshop from '../content/workshop.md'

import arrow from '../assets/images/arrow.png'
import arrowBlack from '../assets/images/arrow-black.png'

export default class Tabs extends React.Component {
  render () {
    const route = this.props.route.path
    return (
      <div id="tools" className="layout__tabs">
        <div className="tab__container">
          {[app, book].map((project, key) => (
            <Link
              to={prefixLink('/#{project.link}/')}
              key={key} className="tab"
              onClick={() => {}}
            >
              <h3 className="tab__title"> { project.title }</h3>
              <h2 className="tab__subtitle"> { project.subtitle }</h2>
              {(route === '/#{project.link}/') && (
                <img className="tab__arrow" role="presentation" src={arrow} />)}
              {(route === '/#{project.link}/') && (
                <img
                  className="tab__arrow tab__arrow-black"
                  role="presentation"
                  src={arrowBlack}
                />)}
            </Link>
          ))}
          <Link to={prefixLink('/')} key={3} className="tab" onClick={() => {}}>
            <pre><h3 className="tab__workshop-title">{ workshop.title }</h3></pre>
            {(!route) && <img className="tab__arrow" src={arrow} role="presentation" />}
            {(!route) && (
              <img
                className="tab__arrow tab__arrow-black"
                src={arrowBlack} role="presentation"
              />)}
          </Link>
        </div>
      </div>
    )
  }
}

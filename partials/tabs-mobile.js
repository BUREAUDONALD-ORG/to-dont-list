import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import site from '../content/site.md';
import app from '../content/app.md';
import book from '../content/book.md';
import workshop from '../content/workshop.md';

import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'

export default class TabsMobile extends React.Component {
  render () {
    return (
    <div id="tools" className="layout__tabs">
      <h1 className="tab__header">{site.tabsHeader}</h1>
      <div className="tab__container">
        {[app, book, workshop].map((project, key)=>{
          return <Link to={prefixLink("/" + project.link + "/")} key={key} className="tab" onClick={()=>{}}>
            <h3 className="tab__title"> { project.title }</h3>
            <h2 className="tab__subtitle"> { project.subtitle }</h2>
            <img className="tab__arrow" src={arrowRight} />
          </Link>              
        })}
      </div>
    </div>
    )
  }
}

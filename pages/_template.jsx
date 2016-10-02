import React from 'react'

import "styles/app.scss";

import Desktop from '../partials/desktop.jsx'
import Mobile from '../partials/mobile.jsx'

export default class Template extends React.Component {
  static () {
    return {
      children: React.PropTypes.any,
    }
  }

  render () {
    return (
      <div className="layout__wrapper">
        {(()=>{ 
          if (typeof window == "undefined"){
            return <Desktop children={this.props.children} />
          } else {
            if (window.innerWidth >= 800) {
              return <Desktop children={this.props.children} />
            } else {
              return <Mobile children={this.props.children} /> 
        }}})()}
      </div>
    )
  }
}
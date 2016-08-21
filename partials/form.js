import React from 'react'
import arrow from '../assets/images/arrow.png'

export default class Form extends React.Component {
  render () {
    return (
      <form className="form">
        <div className="form__header">
          <img className="form__arrow" src={arrow} />
          <div className="form__title"> Send Donald a 5 Sentence Email</div>
        </div>
      </form>
    )
  }
}

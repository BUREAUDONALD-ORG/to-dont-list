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
        <div className="form__fields-container">
          <fieldset className="form__fieldset">
            <label className="form__label">1. Say Hi!</label>
            <input className="form__field" type="text" placeholder="1. Say Hi!"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label">2. Why are you sending this email?</label>
            <input className="form__field" type="text" placeholder="2. Why are you sending this email?"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label">3. Need to know detail.</label>
            <input className="form__field" type="text" placeholder="3. Need to know detail."/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label">4. What would you like me to do?</label>
            <input className="form__field" type="text" placeholder="4. What would you like me to do?"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label">5. Say Bye</label>
            <input className="form__field" type="text" placeholder="5. Say Bye"/>
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label">Enter your email for a cc and reply.</label>
            <input className="form__field" type="text" placeholder="Enter your email for a cc and reply."/>
          </fieldset>
          <input type="submit" placeholder="send" />
        </div>
      </form>
    )
  }
}

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
          <div className="form__div">
            <input className="form__field" type="text" placeholder="1. Say Hi!"/>
            <label className="form__label">1. Say Hi!</label>
          </div>
          <div className="form__div">
            <input className="form__field" type="text" placeholder="2. Why are you sending this email?"/>
            <label className="form__label">2. Why are you sending this email?</label>
          </div>
          <div className="form__div">
            <input className="form__field" type="text" placeholder="3. Need to know detail."/>
            <label className="form__label">3. Need to know detail.</label>
          </div>
          <div className="form__div">
            <input className="form__field" type="text" placeholder="4. What would you like me to do?"/>
            <label className="form__label">4. What would you like me to do?</label>
          </div>
          <div className="form__div">
            <input className="form__field" type="text" placeholder="5. Say Bye"/>
            <label className="form__label">5. Say Bye</label>
          </div>
          <div className="form__div">
            <input className="form__field" type="text" placeholder="Enter your email for a cc and reply."/>
            <label className="form__label">Enter your email for a cc and reply.</label>
          </div>
          <input type="submit" placeholder="send" />
        </div>
      </form>
    )
  }
}

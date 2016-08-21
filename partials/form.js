import React from 'react'
import arrow from '../assets/images/arrow.png'

import form from '../content/form.yaml';

export default class Form extends React.Component {
  render () {
    return (
      <form className="form">
        <div className="form__header">
          <img className="form__arrow" src={arrow} />
          <div className="form__title">{form.header}</div>
        </div>
        <div className="form__fields-container">
          {form.fields.map((field, key)=>{
            return <div key={key} className="form__field-container">
              <input className="form__field" type="text" placeholder={field} autoComplete="off"/>
              <label className="form__label">{field}</label>
            </div>
          })}
          <div className="form__submit-container">
            <div className="form__field-container form__field-container--cc">
              <input className="form__field form__field--cc" type="text" placeholder={form.ccField} />
              <label className="form__label">{form.ccField}</label>
            </div>
            <input className="form__submit" type="submit" value="send" />
          </div>
        </div>
      </form>
    )
  }
}
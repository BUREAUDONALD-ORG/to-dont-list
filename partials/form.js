import React from 'react'
import arrow from '../assets/images/arrow.png'

import form from '../content/form.yaml';

export default class Form extends React.Component {
  render () {
    console.log(form)
    return (
      <form className="form">
        <div className="form__header">
          <img className="form__arrow" src={arrow} />
          <div className="form__title">{form.header}</div>
        </div>
        <div className="form__fields-container">
          {form.fields.map((field, key)=>{
            return <div key={key} className="form__field-container">
              <input className="form__field" type="text" placeholder={field} />
              <label className="form__label">{field}</label>
            </div>
          })}

          <div className="form__div">
            <input className="form__field" type="text" placeholder={form.ccField} />
            <label className="form__label">{form.ccField}</label>
          </div>

          <input type="submit" placeholder="send" />

        </div>
      </form>
    )
  }
}

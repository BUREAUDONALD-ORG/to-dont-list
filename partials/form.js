import React from 'react'

import arrow from '../assets/images/arrow.png'

import form from '../content/form.yaml';

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: [
        "",
        "",
        "",
        "",
        ""
      ],
      email: ""
    }
  }

  updateField (field, event) {
    event.persist()
    this.setState((prevState)=>{
      let newState = prevState;
      let value = event.target.value;
      if (field == "email"){
        newState.email = value;
      } else {
        newState.fields[field] = value;
      }
      return newState;
    })
  }

  render () {
    console.log(this.state)
    return (
      <form className="form">
        <div className="form__header">
          <img className="form__arrow" src={arrow} />
          <div className="form__title">{form.title}</div>
          <img className="form__arrow" src={arrow} />
        </div>
        <div className="form__fields-container">
          {form.fields.map((field, key)=>{
            return <div key={key} className="form__field-container">
              <input className="form__field" type="text" placeholder={field} onChange={this.updateField.bind(this, key)} autoComplete="off"/>
              <label className="form__label">{field}</label>
            </div>
          })}
          <div className="form__submit-container">
            <div className="form__field-container form__field-container--cc">
              <input className="form__field form__field--cc" type="text" onChange={this.updateField.bind(this, "email")} placeholder={form.ccField} />
              <label className="form__label">{form.ccField}</label>
            </div>
            <input className="form__submit" type="submit" value="send" />
          </div>
        </div>
      </form>
    )
  }
}
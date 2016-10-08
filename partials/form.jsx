import React from 'react'

import arrow from '../assets/images/arrow.png'

import form from '../content/form.yaml'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: [
        '',
        '',
        '',
        '',
        '',
      ],
      email: '',
    }
  }

  updateField (field, event) {
    event.persist()
    this.setState((prevState) => {
      const newState = prevState
      const value = event.target.value
      if (field === 'email') {
        newState.email = value
      } else {
        newState.fields[field] = value
      }
      return newState
    })
  }

  submitEmail (event) {
    event.preventDefault()
    if (typeof window !== undefined) {
      const fields = this.state.fields
      const body = '#{fields[0]},\n\n#{fields[1]}.\n#{fields[2]}.\n#{fields[3]}.\n\n#{fields[4]}'
      const bodyURI = encodeURIComponent(body)
      const mail = 'mailto:#{form.mailTo}?subject=ToDontForm%20-%20#{fields[1]}&body=#{bodyURI}'
      window.location.href = mail
      this.setState((prevState) => {
        const newState = prevState
        newState.isSubmitted = true
        return newState
      })
    }
  }

  render () {
    return (
      <form className="form" onSubmit={this.submitEmail.bind(this)}>
        <div className="form__header">
          <img className="form__arrow" src={arrow} alt="arrow" />
          <div className="form__title">{form.title}</div>
          <img className="form__arrow" src={arrow} alt="arrow" />
        </div>
        <div className="form__fields-container">
          {form.fields.map((field, key) => (
            <div key={key} className="form__field-container">
              <input
                className="form__field"
                type="text"
                placeholder={field}
                onChange={this.updateField.bind(this, key)} autoComplete="off"
              />
              <label
                htmlFor={'field #{key}'}
                className="form__label"
              >
                  {field}
              </label>
            </div>)) }
          <div className="form__submit-container">
            <div className="form__field-container form__field-container--cc">
              <input
                className="form__field form__field--cc"
                type="text"
                onChange={this.updateField.bind(this, 'email')}
                placeholder={form.ccField}
              />
              <label htmlFor="1" className="form__label">{form.ccField}</label>
            </div>
            <input
              className="form__submit"
              type="submit"
              value={this.state.isSubmitted ? 'Thank You!' : 'send'}
            />
          </div>
        </div>
      </form>
    )
  }
}

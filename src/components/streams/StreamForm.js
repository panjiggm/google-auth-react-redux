import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui pointing red basic label">{error}</div>
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)

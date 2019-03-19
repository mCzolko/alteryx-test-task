import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './RegisterForm.css'

const RegisterForm = ({ handleSubmit, error, submitting }) => (
  <form onSubmit={handleSubmit} className="RegisterForm">
    {error && <strong>{error}</strong>}
    <div>
      <Field name="firstName" component="input" type="text" placeholder="First name" required />
    </div>
    <div>
      <Field name="lastName" component="input" type="text" placeholder="Last name" required />
    </div>
    <div>
      <Field name="email" component="input" type="email" placeholder="Email" required />
    </div>
    <div>
      <Field name="password" component="input" type="password" placeholder="Password" required />
    </div>
    <button type="submit" disabled={submitting}>Submit</button>
  </form>
)

export default reduxForm({
  form: 'register'
})(RegisterForm)

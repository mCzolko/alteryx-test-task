import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './LoginForm.css'

const LoginForm = ({ handleSubmit, error, submitting }) => (
  <form onSubmit={handleSubmit} className="LoginForm">
    {error && <strong>{error}</strong>}
    <div>
      <Field name="email" component="input" type="email" placeholder="Email" required />
    </div>
    <div>
      <Field name="password" component="input" type="password" placeholder="Password" required />
    </div>
    <button type="submit" disabled={submitting}>Log in</button>
  </form>
)

export default reduxForm({
  form: 'login'
})(LoginForm)

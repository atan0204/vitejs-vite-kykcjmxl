import { useState } from 'react'
import FormField from '../../forms/FormField/FormField'
import Button from '../../ui/Button/Button'
import './ContactForm.css'

export default function ContactForm({ inquiryTypes = [] }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    inquiry: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Name is required'
    if (!values.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(values.email)) errs.email = 'Enter a valid email'
    if (!values.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  if (status === 'sent') {
    return (
      <div className="contact-form-success" aria-live="polite">
        <h3>Thank you!</h3>
        <p>Your message has been sent. We'll get back to you soon.</p>
        <Button variant="outline" onClick={() => {
          setStatus('idle')
          setValues({ name: '', email: '', inquiry: '', subject: '', message: '' })
        }}>
          Send Another
        </Button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <FormField
          id="name"
          label="Name"
          required
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="contact-form-row">
        <FormField
          id="inquiry"
          label="Inquiry Type"
          as="select"
          value={values.inquiry}
          onChange={handleChange}
        >
          <option value="">Select one...</option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </FormField>
        <FormField
          id="subject"
          label="Subject"
          value={values.subject}
          onChange={handleChange}
        />
      </div>

      <FormField
        id="message"
        label="Message"
        as="textarea"
        required
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />

      <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

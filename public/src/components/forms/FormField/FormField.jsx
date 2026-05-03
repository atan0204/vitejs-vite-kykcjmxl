import Input from '../../ui/Input/Input'
import './FormField.css'

export default function FormField({
  id,
  label,
  hint,
  error,
  required = false,
  as = 'input',
  children,
  ...inputProps
}) {
  const hintId  = hint  ? `${id}-hint`  : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`form-field ${error ? 'form-field--error' : ''}`}>
      <label htmlFor={id} className="form-field-label">
        {label}
        {required && <span className="form-field-required" aria-hidden="true"> *</span>}
      </label>

      {hint && (
        <p id={hintId} className="form-field-hint">{hint}</p>
      )}

      <Input
        as={as}
        id={id}
        name={id}
        required={required}
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : undefined}
        {...inputProps}
      >
        {children}
      </Input>

      {error && (
        <p id={errorId} className="form-field-error" role="alert">{error}</p>
      )}
    </div>
  )
}

import './Input.css'

export default function Input({
  // eslint-disable-next-line no-unused-vars -- used as JSX tag
  as: Component = 'input',
  className = '',
  children,
  ...rest
}) {
  return (
    <Component className={`field ${className}`.trim()} {...rest}>
      {children}
    </Component>
  )
}

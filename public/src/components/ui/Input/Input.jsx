import './Input.css'

export default function Input({
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

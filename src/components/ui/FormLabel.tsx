interface FormLabelProps {
  text: string
  className?: string
}

function FormLabel({ text, className = '' }: FormLabelProps) {
  return (
    <p className={`text-neutral-900 mb-1 ${className}`}>
      {text}
    </p>
  )
}

export default FormLabel

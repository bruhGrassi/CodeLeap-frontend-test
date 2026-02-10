import { ButtonHTMLAttributes } from 'react'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  className?: string
}

function FormButton({ 
  children, 
  disabled = false, 
  variant = 'primary',
  className = '',
  ...props 
}: FormButtonProps) {
  const baseStyles = 'px-8 py-1 rounded-lg font-bold text-neutral-50 transition-colors'
  
  const variantStyles = {
    primary: disabled
      ? 'bg-neutral-300 cursor-not-allowed'
      : 'bg-brand cursor-pointer hover:opacity-90 active:opacity-80',
    secondary: disabled
      ? 'bg-neutral-300 cursor-not-allowed'
      : 'bg-neutral-400 cursor-pointer hover:opacity-90 active:opacity-80'
  }

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default FormButton

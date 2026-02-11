import type { TextareaHTMLAttributes } from 'react'

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function FormTextarea({ 
  label, 
  value, 
  onChange, 
  className = '',
  placeholder = 'Content here',
  ...props 
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-neutral-900">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          h-[74px]
          w-full px-3 py-2 border border-main-border rounded-lg 
          text-neutral-900 placeholder-neutral-300 focus:outline-none 
          focus:ring-2 focus:ring-brand focus:border-transparent
          ${className}
        `}
        {...props}
      />
    </div>
  )
}

export default FormTextarea


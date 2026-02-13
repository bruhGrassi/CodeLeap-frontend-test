import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({
  label,
  value,
  onChange,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-neutral-900">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-main-border rounded-lg text-neutral-900 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
}

export default FormInput;

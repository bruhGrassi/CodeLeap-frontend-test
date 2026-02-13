import type { ButtonHTMLAttributes } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "cancel" | "delete" | "save";
  className?: string;
}

function FormButton({
  children,
  disabled = false,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: FormButtonProps) {
  const baseStyles =
    "rounded-lg h-8 w-[120px] font-bold text-center transition-colors text-base text-neutral-50 hover:opacity-90 active:opacity-80";

  const variantStyles: Record<
    NonNullable<FormButtonProps["variant"]>,
    string
  > = {
    primary: "bg-brand",
    cancel: "bg-neutral-50 border border-neutral-300 text-neutral-900",
    delete: "bg-danger",
    save: "bg-success",
  };

  const disabledStyles = disabled ? "cursor-not-allowed bg-neutral-300" : "";

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default FormButton;

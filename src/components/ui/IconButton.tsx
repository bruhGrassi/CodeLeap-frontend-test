import type { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
  className?: string;
}

function IconButton({ icon, alt, className = "", ...props }: IconButtonProps) {
  const baseStyles =
    "w-[24px] md:h-[34px] md:w-[31.2px] md:h-[30px] flex items-center justify-center hover:opacity-80 active:opacity-70";

  return (
    <button
      type="button"
      aria-label={alt}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      <img src={icon} alt="" aria-hidden="true" />
    </button>
  );
}

export default IconButton;

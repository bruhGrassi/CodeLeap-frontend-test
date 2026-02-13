interface FormHeaderProps {
  title: string;
  className?: string;
}

function FormHeader({ title, className = "" }: FormHeaderProps) {
  return (
    <h2
      className={`text-neutral-900 font-bold text-lg md:text-1xl mb-4 ${className}`}
    >
      {title}
    </h2>
  );
}

export default FormHeader;

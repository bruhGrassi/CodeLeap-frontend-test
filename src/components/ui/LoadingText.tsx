import spinnerIcon from "../../assets/spinner.svg";

interface LoadingTextProps {
  text: string;
}

function LoadingText({ text }: LoadingTextProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex justify-center items-center gap-1"
    >
      <span>{text}</span>
      <img
        src={spinnerIcon}
        alt="Spinning icon"
        aria-hidden="true"
        className="w-4 h-4"
      />
    </div>
  );
}

export default LoadingText;

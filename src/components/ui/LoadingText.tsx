import spinnerIcon from '../../assets/Spinners3DotsBounce.svg'

interface LoadingTextProps {
  text: string
}

function LoadingText({ text }: LoadingTextProps) {
  return (
    <div className="flex justify-center items-center gap-1">
      <span>{text}</span>
      <img src={spinnerIcon} alt="Loading" className="w-4 h-4" />
    </div>
  )
}

export default LoadingText

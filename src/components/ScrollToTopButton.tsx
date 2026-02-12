import arrowUpIcon from '../assets/arrow_upward.svg'
import { IconButton } from './ui'

function ScrollToTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-brand rounded-full p-1 shadow-lg transition-opacity duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.12)]
  ring-1 ring-black/5" >
      <IconButton
        icon={arrowUpIcon}
        alt="Scroll up"
        onClick={handleScrollTop}
      />
    </div>
  );
}


export default ScrollToTopButton;
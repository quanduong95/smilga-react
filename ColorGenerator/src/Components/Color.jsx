import { toast } from 'react-toastify';

const Color = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Copied color to clipboard');
      } catch (error) {
        toast.error('Failed to copy to clipboard');
      }
    } else {
      toast.error('Clipboard is currently not available');
    }
  };
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={() => saveToClipboard()}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};

export default Color;

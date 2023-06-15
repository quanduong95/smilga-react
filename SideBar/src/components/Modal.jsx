import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const isOpen = false;
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h2>modal content</h2>
        <button
          className='close-modal-btn'
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

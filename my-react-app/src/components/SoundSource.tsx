import { IoMdPlay, IoIosPause } from 'react-icons/io';
import { MdOutlineVolumeUp } from 'react-icons/md';
export const SoundSource = ({ soundSource }) => {
  return (
    <main className='my-6'>
      <div className='flex items-center gap-1'>
        <p>{soundSource}</p>
        <IoMdPlay
          size={16}
          className='cursor-pointer'
        />
        <IoIosPause
          size={20}
          className='cursor-pointer'
        />
      </div>
      <MdOutlineVolumeUp size={22} />
    </main>
  );
};

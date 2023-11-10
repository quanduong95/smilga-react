import { AiOutlineSearch, AiOutLineClose } from 'react-icons/ai';
import { TiMicrophne } from 'react-icons/ti';
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoAppsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='flex justify-between items-center px-14 h-14 bg-[#111111] opacity-95 sticky top-0 z-50'>
      <div className='flex gap-6 items-center text-2xl'>
        <div>
          <GiHamburgerMenu
            size={28}
            className='text-white'
          />
        </div>
        <Link to='/'>
          <div className='flex gap-1 items-center justify-center'>
            <BsYoutube className='text-3xl text-red-600  ' />
            <span className='text-xl font-medium text-white'>Youtube</span>
          </div>
        </Link>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <form
          action='
        '
        >
          <div className='flex bg-zinc-700 items-center h-10 px4 pr-0'>
            <div className='flex gap-4 items-center pr-5'>
              <div>
                <AiOutlineSearch className='text-xl' />
              </div>
              <input
                type='text'
                className='w-96 bg-zinc-700 focus:outline-none border-none'
              />
              <AiOutLineClose className='text-xl cursor-pointer' />
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { TiMicrophone } from 'react-icons/ti';
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoAppsSharp } from 'react-icons/io5';

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center  px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50'>
      <div className='flex gap-8 items-center text-2xl'>
        <div>
          <GiHamburgerMenu className='text-white' />
        </div>
        <div className='flex gap-1 items-center justify-center'>
          <BsYoutube className='text-3xl text-red-600' />
          <span className='text-xl font-medium text-white'>YouTube</span>
        </div>
      </div>
      <div className='flex items-center  gap-4'>
        <form>
          <div className='flex  items-center h-10 px-4 pr-0'>
            <div className='flex gap-4 items-center pr-5 text-white'>
              <input
                type='text'
                className='w-96 p-2 bg-zinc-900 focus:outline-none '
              />
              <AiOutlineClose className='text-xl cursor-pointer text-white' />
            </div>
            <button className='h-10 w-16 flex items-center justify-center bg-zinc-700 text-white rounded-r-3xl'>
              <AiOutlineSearch className='text-2xl ' />
            </button>
          </div>
        </form>
        <div className=' p-[10px] text-xl text-white bg-zinc-700 rounded-full cursor-pointer'>
          <TiMicrophone />
        </div>
      </div>
      <div className='flex gap-5 items-center text-xl text-white '>
        <BsCameraVideo className='cursor-pointer' />
        <IoAppsSharp className='cursor-pointer' />
        <div className='relative'>
          <BsBell className='cursor-pointer' />
          <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
            9+
          </span>
        </div>
        <img
          src='https://yt3.ggpht.com/wgnEbc2Ec2JYkeyzUbiHzDlAFObI2Btwo2YRCEF1aCMBiRc5E_zWy8-URBQS3EMQ1yzzaGFR=s88-c-k-c0x00ffffff-no-rj-mo'
          className='w-9 h-9 rounded-full cursor-pointer'
          alt='logo'
        />
      </div>
    </div>
  );
};

import {
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  helpLinks,
  textLinks,
} from '../data/Links';

export const Sidebar = () => {
  return (
    <div className='w-[20%] bg-white pr-5 overflow-auto pb-8 sidebar'>
      <ul className='flex flex-col border-b-[0.1px] border-gray-100'>
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={` ml-6 pl-2 py-3 hover:bg-gray-200 hover:rounded-md hover:rounded-md ${
                name === 'Home' ? 'bg-white' : ''
              }`}
            >
              <a
                href='#'
                className='flex items-center gap-5'
              >
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-[0.1px] border-gray-200'>
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={` ml-6 pl-2 py-3 hover:bg-gray-200 hover:rounded-md `}
            >
              <a
                href='#'
                className='flex items-center gap-5'
              >
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-[0.1px] border-gray-200'>
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={` ml-6 pl-2 py-3 hover:bg-gray-200 hover:rounded-md `}
            >
              <a
                href='#'
                className='flex items-center gap-5'
              >
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-[0.1px] border-gray-200'>
        {helpLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={` ml-6 pl-2 py-3 hover:bg-gray-200 hover:rounded-md `}
            >
              <a
                href='#'
                className='flex items-center gap-5'
              >
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-500 font-bold'>
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

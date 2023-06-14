import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            className='logo'
            alt='logo'
          />
          <button
            className=' nav-toggle'
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => (
                <li key={nanoid()}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ul className='icons'>
          {social.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url}>{icon.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

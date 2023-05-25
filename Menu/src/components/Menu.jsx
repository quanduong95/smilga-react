import React from 'react';
import Item from './Item';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Menu;

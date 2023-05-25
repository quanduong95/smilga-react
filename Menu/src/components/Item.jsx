import React from 'react';

const Item = ({ img, title, price, description }) => {
  return (
    <article className='menu-item'>
      <img
        src={img}
        alt={title}
        className='img'
      />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>{price}</span>
        </header>
        <p className='item-text'>{description}</p>
      </div>
    </article>
  );
};

export default Item;

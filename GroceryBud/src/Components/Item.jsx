import { useState } from 'react';

const Item = ({ item, removeItem, checkItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isCompleted}
        onChange={() => checkItem(item.id)}
      />
      <p style={{ textDecoration: item.isCompleted && 'line-through' }}>
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default Item;

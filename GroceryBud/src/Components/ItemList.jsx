import { nanoid } from 'nanoid';
import Item from './Item';
const ItemList = ({ items, removeItem, checkItem }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={nanoid()}
          item={item}
          removeItem={removeItem}
          checkItem={checkItem}
        />
      ))}
    </div>
  );
};

export default ItemList;

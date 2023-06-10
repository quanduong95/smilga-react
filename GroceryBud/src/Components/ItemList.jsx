import { nanoid } from 'nanoid';
import Item from './Item';
const ItemList = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={nanoid()}
          item={item}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default ItemList;

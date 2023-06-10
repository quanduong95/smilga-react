import Form from './Components/Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import ItemList from './Components/ItemList';

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (newItemName) => {
    if (!newItemName) {
      toast.error('Empty task');
      return;
    }
    const newItem = {
      name: newItemName,
      id: nanoid(),
      isCompleted: false,
    };
    const newItems = [...items, newItem];
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success('Added item successfully');
  };

  const removeItem = (id) => {
    const remainingItems = items.filter((item) => item.id !== id);
    setLocalStorage(remainingItems);
    setItems(remainingItems);
  };

  const checkItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <ItemList
        items={items}
        removeItem={removeItem}
        checkItem={checkItem}
      />
      <ToastContainer
        position='top-right'
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme='light'
      />
    </section>
  );
};

export default App;

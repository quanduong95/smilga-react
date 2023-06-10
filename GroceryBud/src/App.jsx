import Form from './Components/Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import ItemList from './Components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItemName) => {
    if (!newItemName) {
      toast.error('Empty task');
      return;
    }
    const newItem = {
      name: newItemName,
      id: nanoid(),
      completed: false,
    };
    setItems([...items, newItem]);
    toast.success('Added item successfully');
  };

  const removeItem = (id) => {};

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <ItemList
        items={items}
        removeItem={removeItem}
      />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme='light'
      />
    </section>
  );
};

export default App;

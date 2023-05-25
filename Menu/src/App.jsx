import { useState } from 'react';
import Menu from './components/Menu';
import Title from './components/Title';
import menu from './data';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    setMenuItems(menu.filter((item) => item.category === category));
  };
  return (
    <main>
      <section className='menu'>
        <Title title='our menu' />
        <Categories
          categories={categories}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;

import { useState } from 'react'
import './App.css'
import menuArray from './data/menu';
import categoryArray from './data/category';
import MenuList from './components/MenuList'
import CategoryList from './components/CategoryList';

function App() {
  const [menu, setMenu] = useState(menuArray);
  const [categories] = useState(categoryArray);
  const [currentCatgeory, setCurrentCategory] = useState("all");

  const handleCategoryChange = (categoryName) => {
    setCurrentCategory("all")
    if (categoryName === "all") {
      setMenu(menuArray);
      setCurrentCategory(categoryName);

      return;
    }

    const filteredMenuByCategory = menuArray.filter(menuItem => menuItem.category === categoryName);
    setCurrentCategory(categoryName);

    setMenu(filteredMenuByCategory);
  }

  return (
    <div className='menu'>
      <div className='menu__container container'>
        <section className='menu__content'>
          <header className='menu__header'>
            <h1 className='title'>Our menu</h1>
            <div className="divider divider-10 divider-primary mx-auto"></div>
          </header>

          <CategoryList categories={categories}
            currentCatgeory={currentCatgeory}
            onCategoryChange={handleCategoryChange} />

          <MenuList menu={menu} />
        </section>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import { dishes } from '../data';

const App = () => {
  const allCategories = ['all', ...new Set(dishes.map(dish => dish.category))];
  const [menuItems, setMenuItems] = useState(dishes);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(dishes);
      return;
    }
    const newItems = dishes.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className="filter-btn"
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            const { id, title, img, desc, price } = item;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;

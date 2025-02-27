import { useState } from 'react';


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuData = {
    starters: [
      {
        id: 1,
        name: 'Bruschetta',
        description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and basil.',
        price: 9.95,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        name: 'Calamari Fritti',
        description: 'Crispy fried calamari served with lemon aioli and marinara sauce.',
        price: 12.95,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        name: 'Beef Carpaccio',
        description: 'Thinly sliced raw beef tenderloin with arugula, capers, shaved Parmesan, and truffle oil.',
        price: 14.95,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 4,
        name: 'Mushroom Arancini',
        description: 'Crispy risotto balls filled with wild mushrooms and mozzarella, served with truffle aioli.',
        price: 11.95,
        image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    mains: [
      {
        id: 5,
        name: 'Filet Mignon',
        description: '8oz grass-fed beef tenderloin with red wine reduction, served with truffle mashed potatoes and seasonal vegetables.',
        price: 38.95,
        image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 6,
        name: 'Herb Crusted Salmon',
        description: 'Fresh Atlantic salmon with a crispy herb crust, served with saffron risotto and seasonal vegetables.',
        price: 29.95,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
      },
      {
        id: 7,
        name: 'Truffle Risotto',
        description: 'Creamy Arborio rice slowly cooked with white wine, finished with black truffle and aged Parmesan.',
        price: 24.95,
        image: 'https://www.allrecipes.com/thmb/KnXakmJaXgqp6dX7PSU0oerZ0eY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1036388-risotto-with-truffle-and-parmesan-naples34102-4x3-1-9162f31e5ce6457a8ba9dea9e11fadfc.jpg'
      },
      {
        id: 8,
        name: 'Rack of Lamb',
        description: 'Herb-crusted New Zealand lamb rack with mint jus, served with roasted fingerling potatoes and glazed carrots.',
        price: 36.95,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    desserts: [
      {
        id: 9,
        name: 'Chocolate Fondant',
        description: 'Decadent chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis.',
        price: 10.95,
        image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 10,
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with a caramelized sugar crust, garnished with fresh berries.',
        price: 9.95,
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 11,
        name: 'Tiramisu',
        description: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
        price: 9.95,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 12,
        name: 'Lemon Tart',
        description: 'Buttery pastry shell filled with tangy lemon curd, topped with Italian meringue and candied lemon zest.',
        price: 8.95,
        image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    drinks: [
      {
        id: 13,
        name: 'Signature Martini',
        description: 'Our house specialty with premium vodka, elderflower liqueur, and fresh lemon juice.',
        price: 14.95,
        image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 14,
        name: 'Aged Negroni',
        description: 'Classic cocktail aged in oak barrels, featuring gin, Campari, and sweet vermouth.',
        price: 15.95,
        image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 15,
        name: 'Sommelier\'s Wine Selection',
        description: 'Ask your server about our curated wine list featuring exceptional vintages from around the world.',
        price: 12.95,
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 16,
        name: 'Artisanal Mocktail',
        description: 'Refreshing non-alcoholic blend of fresh fruits, herbs, and house-made syrups.',
        price: 8.95,
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Our Menu</h1>
        
        {/* Menu Categories */}
        <div className="menu-categories" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`btn ${activeCategory === category ? '' : 'btn-outline'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="menu-category">
          <h2 className="menu-category-title">
            {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h2>
          
          <div className="menu-items">
            {menuData[activeCategory].map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-item-img" />
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3 className="menu-item-title">{item.name}</h3>
                    <span className="menu-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Dietary Notes */}
        <div style={{ marginTop: '4rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Dietary Information</h3>
          <p>We are happy to accommodate dietary restrictions and allergies. Please inform your server of any special requirements.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'white', 
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              Vegetarian Options Available
            </span>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'white', 
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              Gluten-Free Options Available
            </span>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'white', 
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              Vegan Options Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
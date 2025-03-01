import { useState , useEffect} from 'react';



  const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('starters');
  const [menuItems, setMenuItems] = useState([]); // Store items for the active category
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

    useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5000/api/menu?category=${activeCategory}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, [activeCategory]); // Re-fetch when activeCategory changes


  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Our Menu</h1>
        
        {/* Menu Categories */}
        <div
          className="menu-categories"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {['starters', 'mains', 'desserts', 'drinks'].map((category) => (
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

          {isLoading ? (
            <p>Loading menu items...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <div className="menu-items">
              {menuItems.map((item) => (
                <div key={item._id} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-img" />
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3 className="menu-item-title">{item.name}</h3>
                      <span className="menu-item-price">Rs{item.price.toFixed(2)}</span>
                    </div>
                    <p className="menu-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          )}
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
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaCheck, FaSignOutAlt } from "react-icons/fa"; // Added FaSignOutAlt for logout
import { useNavigate } from "react-router-dom"; // For navigation

const Admin = () => {
  const [activeTab, setActiveTab] = useState("reservations");
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate(); // For navigation

  const PopupForm = ({ onClose, onSubmit }) => {
    const [newItem, setNewItem] = useState({
      name: "",
      category: "starters",
      price: "",
      description: "",
      image: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewItem({ ...newItem, [name]: value });
    };
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h3>Add New Menu Item</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(newItem);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newItem.name}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              value={newItem.category}
              onChange={handleChange}
            >
              <option value="starters">Starters</option>
              <option value="mains">Mains</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newItem.description}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newItem.image}
              onChange={handleChange}
            />
            <div className="popup-buttons">
              <button type="submit" className="btn">
                Add Item
              </button>
              <button type="button" className="btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  /* Mock data for menu items
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Bruschetta',
      category: 'starters',
      price: 9.95,
      description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and basil.'
    },
    {
      id: 2,
      name: 'Filet Mignon',
      category: 'mains',
      price: 38.95,
      description: '8oz grass-fed beef tenderloin with red wine reduction, served with truffle mashed potatoes and seasonal vegetables.'
    },
    {
      id: 3,
      name: 'Chocolate Fondant',
      category: 'desserts',
      price: 10.95,
      description: 'Decadent chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis.'
    }
  ]); */
  
  // Mock data for inquiries
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'Michael Brown',
      email: 'michael@example.com',
      subject: 'Private Event Inquiry',
      message: 'I would like to inquire about hosting a private event for 20 people next month. What options do you have available?',
      date: '2023-07-10',
      status: 'unread'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      subject: 'Dietary Restrictions',
      message: 'I have severe gluten and dairy allergies. Can you accommodate these restrictions for a dinner reservation this weekend?',
      date: '2023-07-11',
      status: 'read'
    }
  ]);  

  const [menuItems, setMenuItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  fetch("http://localhost:5000/api/menu")
    .then((res) => res.json())
    .then((data) => setMenuItems(data))
    .catch((error) => console.error("Error fetching menu items:", error));
}, []);

const handleAddItem = async (newItem) => {
  try {
    const response = await fetch("http://localhost:5000/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    const addedItem = await response.json();
    setMenuItems([...menuItems, addedItem]);
    setShowPopup(false);
  } catch (error) {
    console.error("Error adding menu item:", error);
  }
};
  
   // Fetch reservations from the backend
   useEffect(() => {
    fetch("http://localhost:5000/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((error) => console.error("Error fetching reservations", error));
  }, []);
  
    // Confirm a reservation
    const handleConfirm = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/reservations/${id}/confirm`, {
          method: "PUT",
        });
        
    if (!response.ok) {
      throw new Error("Failed to confirm reservation");
    }
        setReservations((prev) =>
          prev.map((res) =>
            res._id === id ? { ...res, status: "confirmed" } : res
          )
        );
      } catch (error) {
        console.error("Error confirming reservation:", error);
      }
    };

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/reservations/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete reservation");
        }
  
        setReservations(reservations.filter((res) => res._id !== id));
      } catch (error) {
        console.error("Error deleting reservation:", error);
      }
    };
  
    // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/login"); // Redirect to the login page
  };

  // Handle menu item deletion
  const handleDeleteMenuItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/menu/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete Item");
      }

      setReservations(menuItems.filter((res) => res._id !== id));
    } catch (error) {
      console.error("Error deleting Item:", error);
    }
  };
  
  // Handle menu item edition
  const handleEditItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/menu/${id}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to edit Item");
      }

      setReservations(menuItems.filter((res) => res._id !== id));
    } catch (error) {
      console.error("Error Editing Item:", error);
    }
  };

  // Handle inquiry status change
  const handleInquiryStatus = (id, status) => {
    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status } : inquiry
      )
    );
  };
  
  // Handle inquiry deletion
  const handleDeleteInquiry = (id) => {
    setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
  };
  
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Admin Dashboard</h1>
        
        <button className="btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        

        {/* Admin Tabs */}
        <div className="admin-tabs">
          <div 
            className={`admin-tab ${activeTab === 'reservations' ? 'active' : ''}`}
            onClick={() => setActiveTab('reservations')}
          >
            Reservations
          </div>
          <div 
            className={`admin-tab ${activeTab === 'menu' ? 'active' : ''}`}
            onClick={() => setActiveTab('menu')}
          >
            Menu Items
          </div>
          <div 
            className={`admin-tab ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            Inquiries
          </div>
        </div>
        
        {/* Admin Content */}
        <div className="admin-content">
          {/* Reservations Tab */}
          {activeTab === 'reservations' && (
            <div>
              <h2>Manage Reservations</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>{reservation.name}</td>
                      <td>{new Date(reservation.date).toLocaleDateString()}</td>
                      <td>{reservation.time}</td>
                      <td>{reservation.guests}</td>
                      <td>
                        <span 
                          style={{ 
                            padding: '0.25rem 0.5rem', 
                            borderRadius: '4px', 
                            backgroundColor: reservation.status === 'confirmed' ? '#28a745' : '#ffc107',
                            color: 'white',
                            fontSize: '0.875rem'
                          }}
                        >
                          {reservation.status}
                        </span>
                      </td>
                      <td>
                        <div className="admin-actions">
                          {reservation.status === 'pending' && (
                            <button 
                              className="admin-btn admin-btn-edit"
                              onClick={() => handleConfirm(reservation._id, 'confirmed')}
                              title="Confirm"
                            >
                              <FaCheck />
                            </button>
                          )}
                          <button 
                            className="admin-btn admin-btn-delete"
                            onClick={() => handleDelete(reservation._id)}
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Menu Items Tab */}
          {activeTab === 'menu' && (
            <div>
              <h2>Manage Menu Items</h2>
              <button 
                className="btn"
                style={{ marginBottom: "1rem" }}
                onClick={() => setShowPopup(true)}
              >
                Add New Item
              </button>
              {showPopup && (
                <PopupForm
                  onSubmit={handleEditItem}
                  onClose={() => setShowPopup(false)}
                />
              )}
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td style={{ textTransform: 'capitalize' }}>{item.category}</td>
                      <td>Rs{item.price.toFixed(2)}</td>
                      <td>
                        <div className="admin-actions">
                          <button 
                            className="admin-btn admin-btn-edit"
                            title="Edit"
                            onClick={() => setShowPopup(true)}
                          >
                            <FaEdit />
                          </button>
                          {showPopup && (
                  <PopupForm
                  onSubmit={handleAddItem}
                  onClose={() => setShowPopup(false)}
                />
              )}
                          <button 
                            className="admin-btn admin-btn-delete"
                            onClick={() => handleDeleteMenuItem(item._id)}
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Inquiries Tab */}
          {activeTab === 'inquiries' && (
            <div>
              <h2>Customer Inquiries</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id}>
                      <td>{inquiry.name}</td>
                      <td>{inquiry.subject}</td>
                      <td>{inquiry.date}</td>
                      <td>
                        <span 
                          style={{ 
                            padding: '0.25rem 0.5rem', 
                            borderRadius: '4px', 
                            backgroundColor: inquiry.status === 'unread' ? '#dc3545' : '#6c757d',
                            color: 'white',
                            fontSize: '0.875rem'
                          }}
                        >
                          {inquiry.status}
                        </span>
                      </td>
                      <td>
                        <div className="admin-actions">
                          {inquiry.status === 'unread' && (
                            <button 
                              className="admin-btn admin-btn-edit"
                              onClick={() => handleInquiryStatus(inquiry.id, 'read')}
                              title="Mark as Read"
                            >
                              <FaCheck />
                            </button>
                          )}
                          <button 
                            className="admin-btn admin-btn-delete"
                            onClick={() => handleDeleteInquiry(inquiry.id)}
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Inquiry Details */}
              {inquiries.length > 0 && (
                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <h3>Inquiry Details</h3>
                  <p><strong>From:</strong> {inquiries[0].name} ({inquiries[0].email})</p>
                  <p><strong>Subject:</strong> {inquiries[0].subject}</p>
                  <p><strong>Date:</strong> {inquiries[0].date}</p>
                  <p><strong>Message:</strong></p>
                  <p style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '4px' }}>
                    {inquiries[0].message}
                  </p>
                  <div style={{ marginTop: '1rem' }}>
                    <button className="btn">Reply</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
const express = require("express");
const MenuItem = require("../models/MenuItem");

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, category,price,description, image,  } = req.body;
    const newItem = new MenuItem({ name,category,price, description, image,});
    await newItem.save();
    res.status(201).json(newItem);
  });

// Get all menu items
router.get('/', async (req, res) => {
    const { category } = req.query;
  
    try {
      const query = category ? { category } : {}; // Fetch all items if no category is provided
      const items = await MenuItem.find(query);
      res.json(items);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      res.status(500).json({ message: 'Failed to fetch menu items' });
    }
  });

  // Update a menu item
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name,category,price, description, image } = req.body;
    const updatedItem = await MenuItem.findOneAndUpdate(
      { id },
      { name,category,price, description, image},
      { new: true }
    );
    res.json(updatedItem);
  });

  // Delete a menu item
router.delete("/:id", async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
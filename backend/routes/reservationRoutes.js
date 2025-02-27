// server/routes/reservationRoutes.js
const express = require("express");
const Reservation = require("../models/Reservation");

const router = express.Router();

// Submit a reservation (status: pending)
router.post("/", async (req, res) => {
    const { name, email, phone, date, time, guests, specialRequests } = req.body;
    try {
      const reservation = new Reservation({ name, email, phone, date, time, guests, specialRequests });
      await reservation.save();
      res.status(201).json(reservation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.put("/:id/confirm", async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        { status: "confirmed" },
        { new: true }
      );
      res.json(reservation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Fetch all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Confirm a reservation
router.put("/:id/confirm", async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: "confirmed" },
      { new: true }
    );
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit a reservation
router.put("/:id", async (req, res) => {
  const { name, email, phone, date, time, guests, specialRequests } = req.body;
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, date, time, guests, specialRequests },
      { new: true }
    );
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a reservation
router.delete("/:id", async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ message: "Reservation deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
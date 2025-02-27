// server/models/Reservation.js
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  specialRequests: { type: String, default: "" },
  status: { type: String, enum: ["pending", "confirmed"], default: "pending" }, // Add status field
});

module.exports = mongoose.model("Reservation", reservationSchema);
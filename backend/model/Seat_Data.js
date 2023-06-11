const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    seat_name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    seat_number: {
      type: Number,
      required: true,
    },
    seat_status: {
      type: Number,
      required: true,
      Comment: "101-active/102-inactive",
      default:101,
    },
    total_seat: {
      type: Number,
      default:80,
    },
    seat_map: {
      type:String,
    },
    row_number: {
      type: Number,
    },
    start_of_current_row: {
      type: Number,
    },
    end_of_current_row: {
      type: Number,
    },
    is_available: {
      type: Boolean,
      default: false,
    },
    is_booked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;

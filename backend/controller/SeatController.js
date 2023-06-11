const SeatModel = require("../model/Seat_Data");

// Create post
const createSeat = async (req, res) => {
  try {
    // get req.body
    const {
      seat_name,
      seat_number,
      row_number,
      start_of_current_row,
      end_of_current_row,
    } = req?.body;
    if (!req?.body)
      return res
        .status(400)
        .json({ data: "Please Enter Valid Detail To Proceed Further" });

    if (req?.body) {
      const Post = await SeatModel.create(req?.body);
      if (Post) {
        return res
          .status(200)
          .json({ message: "Seat Created Successfully", data: [] });
      } else {
        return res
          .status(200)
          .json({ message: "Unable To Create Seat", data: [] });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Retrive post by Id
const getTotalSeat = async (req, res) => {
  try {
    const Get = await SeatModel.find().lean().exec();
    if (Get) {
      return res
        .status(200)
        .json({ message: "Seat Get Successfully", data: Get });
    } else {
      return res.status(200).json({ message: "Unable To Find Seat", data: [] });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const bookSeat = async (req, res) => {
  try {
    // get data
    const { seat_number } = req?.body;
    if (seat_number) {
      //  check is seat number eligible for booked seat 
      const check_data = await check_status(seat_number);
      console.log(check_data,"checkdata")
    }

    return res.json("hello");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

async function check_status(seat_number) {
  try {
    const find_data = await SeatModel.findOne({ seat_number: seat_number, is_booked: false, is_available: false });
    if (find_data) {
      return find_data
    }
  }
  catch (err) {
    return false
  }
}

module.exports = {
  createSeat,
  getTotalSeat,
  bookSeat,
};

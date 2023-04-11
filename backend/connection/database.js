
MONGO_URL =
  "mongodb+srv://priyankaingle250:priya1565@cluster0.zrm5cra.mongodb.net/user";

const mongoose = require("mongoose");

async function connect() {
  return mongoose.connect(
    "mongodb+srv://priyankaingle250:priya1565@cluster0.zrm5cra.mongodb.net/user"
  );
}
module.exports = { connect };
const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `MongoDB connected: ${connection.connection.host}`.yellow.underline.bold
  );
};

module.exports = connectDB;

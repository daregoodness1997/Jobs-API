const mongoose = require('mongoose');

const connectDB = connection_url => {
  mongoose
    .connect(connection_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database Connected');
    })
    .catch(err => {
      console.log('Database not connected ' + err);
    });
};

module.exports = connectDB;

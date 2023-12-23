const mongoose = require('mongoose');
main().catch(err => console.log(err));

// Setting up the connection with db
async function main() {
  await mongoose.connect('mongodb://localhost/urlShortnerAPI');
  console.log("Successfully connected to database.")
}

const db = mongoose.connection;

module.exports = db;
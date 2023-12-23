const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { 
    type: String, 
    required: true 
  },
  shortUrl: { 
    type: String, 
    required: true, 
    unique: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
});

module.exports = mongoose.model('Url', urlSchema);

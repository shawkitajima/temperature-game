const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  scores: Array,
}, {
  timestamps: true
});

module.exports = mongoose.model('Score', scoreSchema);
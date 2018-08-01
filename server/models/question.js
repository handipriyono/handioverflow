const mongoose = require('mongoose');
const Schema = mongoose.Schema


const quest = new Schema({
  question: {
    type: String,

  },
  title: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answerId: {
    type: Schema.Types.ObjectId,
    ref: 'Answer',
  }

}, {
  timestamps: true
});


const Question = mongoose.model('Question', quest);

module.exports = Question

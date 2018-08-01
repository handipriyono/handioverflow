const mongoose = require('mongoose');
const Schema = mongoose.Schema


const answerflow = new Schema({

  answer: {
    type: String,

  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',

  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }

}, {
  timestamps: true
});


const Answer = mongoose.model('Answer', answerflow);

module.exports = Answer

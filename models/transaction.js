const mongoose = require('mongoose');
const db = require('../database/db'); // for db connection
  
const transactionSchema = mongoose.Schema({
	buyer: {
       type: String,
       required: true
   },
   book: {
       type: Array,
       required: true
   },
   date: {
       type: Date,
       default: Date.now
   },
   amount: {
       type: Number,
       required: true
   }
   // we may need to save customer's credit card info
});

module.exports = mongoose.model('Transaction', transactionSchema);

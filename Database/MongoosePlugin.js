const Mongoose = require('mongoose');

Mongoose.Promise= global.Promise;

const connectUrl = `mongodb+srv://Aman:Aman123456@aman.cdekv.mongodb.net/AmanTest?retryWrites=true&w=majority`;

Mongoose.connect(connectUrl);

module.exports={Mongoose};
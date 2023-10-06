var mongoose = require('mongoose');
const setDbConnection = ()=>{
mongoose.connect('mongodb://localhost:27017/chats', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB: ' + err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});
}

setDbConnection();


module.exports = setDbConnection
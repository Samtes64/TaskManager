// this file will handle connection logic to the MongoDB database

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://samtes64:TwprdNMbjHGyFV7y@cluster0.8xhra8y.mongodb.net/TaskManager', { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  }).catch((e) => {
    console.log("Error while attempting to connect with MongoDB");
    console.log(e);
  });

  
  

module.exports={mongoose};

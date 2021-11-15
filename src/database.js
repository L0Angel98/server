//database.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`, options);
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`));
db.once('open', () => {
     // we're connected !
     console.log('Mongodb Connection Successful');
});
const express = require('express');
const graphqlHTTP = require('express-graphql');
const port =  8080;
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const MONGO_URI = 'mongodb+srv://wgadmin:x846TCmO8JIo41cg@warguidecluster-cqwmo.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})

mongoose.connection.once('connected', () => {
  console.log('Database connected')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {console.log(`listening on ${port}...`)} ) 
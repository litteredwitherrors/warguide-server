const express = require('express');
const graphqlHTTP = require('express-graphql');
const port =  8080;
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.connect(process.env.MONGO_URI, { 
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
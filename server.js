const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

const routes = require('./routes/routes');

const cors = require('cors');

app.use(cors({

  origin : 'http://localhost:3000'
}))

mongoose.connect("mongodb+srv://gagankshirsagar2001:b9Ajowb7gtxgzWri@cluster0.grmmxa4.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {

  console.log('Connected to mongodb database');
})
.catch( (err) => {

  console.log(err);
})

app.use(routes);

app.listen(3000, () => {

  console.log("Server stared on the port 3000");
})



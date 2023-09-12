const express = require('express');     // import express
const routes = require('./routes');     // import routes 
// import sequelize connection
// Import the connection object
const sequelize = require('./config/connection');


const app = express();  // Initialize an instance of Express.js
const PORT = process.env.PORT || 3001;  // Set port to either system or default 3001

// // Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use(routes); 

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

      
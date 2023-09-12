const express = require('express');     // import express
const routes = require('./routes');     // import routes 
// import sequelize connection
// Import the connection object
const sequelize = require('./config/connection');

const app = express();  // Initialize an instance of Express.js
const PORT = process.env.PORT || 9016;  // Set port to either system or default 9010

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use(routes); 

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

// deleted app.listen and added on port, bc it was trying to restart the server on same port again
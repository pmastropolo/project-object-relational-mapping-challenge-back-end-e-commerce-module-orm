const router = require('express').Router();     // Import express router
const apiRoutes = require('./api');             // Import API routes

router.use('/api', apiRoutes);                  // Use API routes when path starts with '/api'

router.use((req, res) => {                      // Default response for any other route
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;                        // Export the router for use in other files
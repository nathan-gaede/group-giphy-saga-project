const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  // We get our images from the database by their id (SERIAL PRIMARY KEY)
  // We also tie in GIPHY API's giphy_id so we can know what the image/gif is
  // We make a query to Postico (SELECT *   $1 $2 )
  // $1 = id from database
  // $2 = giphy_id from the GIPHY API
  // $3 = category_id
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

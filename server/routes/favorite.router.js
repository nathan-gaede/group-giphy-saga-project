const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

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


router.get("/:search", (req, res) => {
  const search = req.params.search; // Could use req.query.tag
  // Make a request to the GIPHY API
  axios
      .get(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`
      )
      .then((response) => {
          // Send the response from GIPHY to the client
          res.send(response.data);
      })
      .catch((e) => {
          console.log(e);
          res.sendStatus(500);
      });
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

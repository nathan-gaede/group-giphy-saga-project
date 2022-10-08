import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch();
    dispatch ({ type: 'SEARCH', payload: ''})
//Use this code in the favorite.router.js
    // router.get('/', (req, res) => {
    //     // Make a request to the GIPHY API
    //     axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`)
    //          .then((response) => {
    //              // Send the response from GIPHY to the client
    //              res.send(response.data);
    //          })
    //          .catch((e) => {
    //              console.log(e);
    //              res.sendStatus(500);
    //          });
    // });
}







export default Search;
import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App(props) {
  return (
    <div>
      <Router>
        <h1>Giphy Search!</h1>
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;

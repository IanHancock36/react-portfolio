
import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    <Switch>
      <Route path='/'/>
    </Switch>
      </Router>
  );
}

export default App;


// The switch is helpful with routing because it will look for only and render 
// the first route that matches/includes the path. Once it finds the first route 
// that matches the path it will not look for any other matches. 
// It allows for nested routes to work properly. which above is a nested route

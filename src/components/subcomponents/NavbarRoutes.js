import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

const NavbarRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/"> {<h2>Home</h2>} </Route>
        <Route path="/about"> {/* Render your About component here */<h2>About</h2>} </Route>
        <Route path="/resume"> {/* Render your Resume component here */<h2>Resume</h2>} </Route>
        <Route path="/contact"> {/* Render your Contact component here */<h2>Contact</h2>} </Route>
      </Switch>
    </Router>
  );
};

export default NavbarRoutes;

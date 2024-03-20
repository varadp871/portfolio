import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

const NavbarRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/"> {/* Render your Home component here */} </Route>
        <Route path="/about"> {/* Render your About component here */} </Route>
        <Route path="/resume"> {/* Render your Resume component here */} </Route>
        <Route path="/contact"> {/* Render your Contact component here */} </Route>
      </Switch>
    </Router>
  );
};

export default NavbarRoutes;

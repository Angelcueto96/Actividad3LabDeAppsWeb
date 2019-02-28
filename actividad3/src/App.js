import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './common/Footer';
import Header from './common/Header';
import SearchCity from "./views/SearchCity";
import ViewCity from "./views/ViewCity";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={SearchCity} />
      <Footer />
    </div>
  </Router>
);

export default App;

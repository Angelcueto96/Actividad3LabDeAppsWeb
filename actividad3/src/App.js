import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import SearchCity from "./views/SearchCity";
import ViewCity from "./views/ViewCity";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    



                    <Route exact path="/" component={SearchCity} />
                    <Route path="/view-city" component={ViewCity} />


                    
                </div>

            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
import WeatherItem from "./WeatherItem";
//import Typography from '@material-ui/core/Typography';
import './SearchCity.scss';
var CityWeatherActions = require('../actions/CityWeatherActions');
var CityWeatherStore = require('../store/CityWeatherStore');

class WeatherList extends Component {
  render: function() {
    var rows = [];
    if(this.props.list) {
      this.props.list.map(function(item, index) {
        rows.push(<WeatherItem key={index} index={index} item={item} />);
      });
    }

    return(
      <div className="table-responsive">
      <table className="table">
        <tbody>
          {rows}
        </tbody>
      </table>
      </div>
    )
  }
}
export default WeatherList;

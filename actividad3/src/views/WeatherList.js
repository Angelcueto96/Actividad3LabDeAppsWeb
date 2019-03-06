import React, { Component } from 'react';
import WeatherItem from "./WeatherItem";
//import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './WeatherList.scss';

class WeatherList extends Component {
  render() {
    var rows = [];
    if(this.props.list) {
      this.props.list.list.map(function(item, index) {
        rows.push(<WeatherItem key={index} index={index} item={item} />);
      });
    }
    if(this.props.name) {
      this.props.list.name.map(function(item, index) {
        rows.push(<WeatherItem key={index} index={index} item={item} />);
      });
    }

    return(
      <div className="table-responsive">
  			<Grid container spacing={24} >
          {rows}
      	</Grid>
      </div>
    )
  }
}
export default WeatherList;

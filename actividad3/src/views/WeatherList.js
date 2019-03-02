import React, { Component } from 'react';
import WeatherItem from "./WeatherItem";
//import Typography from '@material-ui/core/Typography';

class WeatherList extends Component {
  render() {
    var rows = [];
    if(this.props.list) {
      this.props.list.list.map(function(item, index) {
        rows.push(<WeatherItem key={index} index={index} item={item} />);
      });
    }
    if(this.props.editing){
      console.log(this.props.editing);
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

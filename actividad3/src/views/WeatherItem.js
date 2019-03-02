import React, { Component } from 'react';

class WeatherItem extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.item}</td>
        <td>
          Weather!
        </td>
      </tr>
    );
  }
}
export default WeatherItem;

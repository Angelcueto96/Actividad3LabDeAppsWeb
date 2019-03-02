import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class WeatherItem extends Component {
  render() {
    return(
      <tr>
        <td>
          <Paper>
            <Grid item xs={6} sm={12}>
              {this.props.item}
            </Grid>
          </Paper>
        </td>
      </tr>
    );
  }
}
export default WeatherItem;

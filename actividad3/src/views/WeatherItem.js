import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './WeatherItem.scss';

class WeatherItem extends Component {
	render() {
		return(


			<Grid item xs={6} sm={4} md={2} className="container">
				<Paper className="paper">
					<h5 >
						{this.props.item}
					</h5>


				</Paper>

			</Grid>

		);
	}
}
export default WeatherItem;

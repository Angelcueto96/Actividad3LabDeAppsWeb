import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './WeatherItem.scss';

class WeatherItem extends Component {
	render() {
		return(

			<tr>

				<td>
					<Grid item xs={12} sm={12}>

						<Paper className="paper">
							<h5 >
							{this.props.item}
							</h5>
							

						</Paper>
					</Grid>
				</td>
			</tr>

		);
	}
}
export default WeatherItem;

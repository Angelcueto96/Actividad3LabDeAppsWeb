import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './WeatherItem.scss';

class WeatherItem extends Component {
	render() {
		return(
			<Grid item xs={6} sm={4} md={2} className="container">
				<Card>
					<CardContent>
        		<Typography className="items" color="textSecondary">
          		{this.props.item}
        		</Typography>
      		</CardContent>
      		<CardActions>
        		<Button size="small">Share</Button>
      		</CardActions>
    		</Card>
			</Grid>
		);
	}
}
export default WeatherItem;

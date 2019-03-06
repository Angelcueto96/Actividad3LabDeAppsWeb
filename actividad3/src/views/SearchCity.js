import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
import WeatherList from './WeatherList';
//import Typography from '@material-ui/core/Typography';
import './SearchCity.scss';
var CityWeatherActions = require('../actions/CityWeatherActions');
var CityWeatherStore = require('../store/CityWeatherStore');

class SearchCity extends Component{
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			list: CityWeatherStore.getList()
		};
	}

	componentDidMount(){
		CityWeatherStore.addChangeListener(this._onChange.bind(this));
		const { city } = this.props.match.params;
		console.log(this.props.match.params);
		console.log("The city from url is: " + city);
		if (city) {
			this.search(city);
		}
	}

	componentWillUnmount(){
		CityWeatherStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange(){
		this.setState({
			list: CityWeatherStore.getList()
		});
	}

	search(city){
		console.log("Server called with: " + city);
		CityWeatherActions.getCity(city);
	}

	onChangeVal(event){
		this.setState({
			name: event.target.value
		});
	}

	render(){
		return(
			<div className="container">
				<img src={require('../assets/weather.png')} alt="weather"/>
				<form noValidate autoComplete="off">
					<TextField
						className="city-input"
						required
						label="City, Country Code"
						margin="normal"
						onChange={this.onChangeVal.bind(this)}
						value={this.state.name.value}
						InputProps={{
							endAdornment:
								<InputAdornment position="end">
									<LocationOn />
								</InputAdornment>,
							}
						}
						variant="filled" />
					<Button
						className="button"
						variant="contained"
						onClick={ ()=> {
								this.props.history.push('/'+this.state.name);
								window.location.reload();
							}
						}
						color="primary">
						Search
					</Button>
				</form>
				<div className= "weatherResults">
					<WeatherList list={this.state.list} />
				</div>
			</div>
		)
	}
}

export default SearchCity;

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
  }

  componentWillUnmount(){
    CityWeatherStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange(){
    this.setState({
      list: CityWeatherStore.getList()
    });
    console.log(this.state.list);
  }

  search(){
    console.log("Server called with: " + this.state.name);
    CityWeatherActions.getCity(this.state.name);
  }

  onChangeVal(event){
    this.setState({
      name: event.target.value
    });
  }

  render(){
    return(
      <div>
        <form noValidate autoComplete="off">
          <TextField
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
            onClick={this.search.bind(this)}
            color="primary">
              Search
          </Button>
        </form>
        <div>
          <WeatherList  list={this.state.list}/>
        </div>
      </div>
    )
  }
}

export default SearchCity;

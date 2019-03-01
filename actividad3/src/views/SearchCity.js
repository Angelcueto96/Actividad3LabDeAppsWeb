import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
//import Typography from '@material-ui/core/Typography';
import './SearchCity.scss';
var CityWeatherActions = require('../actions/CityWeatherActions');
var CityWeatherStore = require('../store/CityWeatherStore');

class SearchCity extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  getInitialState(){
    return CityWeatherStore.getList(); //this is empty at first right??
  }

  componentDidMount() {
    CityWeatherStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CityWeatherStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    //this.setState(CityWeatherStore.getList());
  }

  _search() {
    console.log("Server called with: " + this.state.name);
    CityWeatherActions.getCity(this.state.name);
  }

  _catchEnter(event) {
    if(event.keyCode === 13) {
      this._search();
    }
  }

  onChangeVal(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  render(){
    return(
      <form noValidate autoComplete="off">
        <TextField
          required
          label="City, Country Code"
          margin="normal"
          onChange={this.onChangeVal.bind(this)}
          value={this.state.name.value}
          onKeyDown={this._catchEnter}
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
            onClick={this._search.bind(this)}
            color="primary">
              Search
          </Button>
        </form>
    )
  }
}

export default SearchCity;

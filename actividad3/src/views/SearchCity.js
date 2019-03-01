import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
//import Typography from '@material-ui/core/Typography';
import './SearchCity.scss';
var CityWeatherActions = require('../actions/CityWeatherActions');

class SearchCity extends Component {
  state = {
    name: '',
  };

  queryCity(city) {
    console.log("delete called: " + city);
    CityWeatherActions.getCity(city);
  }

  render() {
    const { city } = this.props.match.params;
    console.log(this.props.match.params);
    console.log("The city from url is: " + city);
    const { classes } = this.props;

    return (
      <form noValidate autoComplete="off">
        <TextField
        id="TextField"
        required
        label="City, Country Code"
        margin="normal"
        onChange={(event) => {
            console.log(event.target.value);
            this.setState({name: event.target.value});
          }
        }
        value={this.state.name.value}
        InputProps={{
          endAdornment:
          <InputAdornment position="end">
            <LocationOn />
          </InputAdornment>,
        }} variant="filled" />

        <Button
        className="button"
        variant="contained"
        onClick={() => {
            console.log("tst: "+ this.state.name);
            this.queryCity(this.state.name);
          }
        }
        color="primary">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchCity;

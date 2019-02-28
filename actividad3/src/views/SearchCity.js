import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import LocationOn from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import './SearchCity.scss';

class SearchCity extends Component {
  state = {
    name: '',
    url: '',
  };
  queryCity(city) {
    console.log("delete called: " + city);
  }
  render() {

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
            
        <Button className="button"
        variant="contained"
        onClick={() => { console.log("tst: "+ this.state.name);
      this.queryCity(this.state.name); }}
        color="primary">
          Search
        </Button>
      </form>
    );
  }


}

export default SearchCity;

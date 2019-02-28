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
    name: 'London',
  };
  render() {
    const { classes } = this.props;
    return (
      <form noValidate autoComplete="off">
        <TextField
        required
        label="City"
        margin="normal"
        value={this.state.name}
        InputProps={{
          endAdornment:
          <InputAdornment position="end">
            <LocationOn />
          </InputAdornment>,
        }} variant="filled" />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchCity;

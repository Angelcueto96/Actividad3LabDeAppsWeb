import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import './SearchCity.scss';


class SearchCity extends Component {





    render() {
        return (

            <div>
                <Typography variant="h6" color="inherit" >
                    Consult Weather from a City
                </Typography>
                <TextField  label="City"  margin="normal" InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon>AccessAlarmIcon</Icon></InputAdornment>,
                    }} variant="filled" /> 
                <div ></div>
                <Button variant="outlined" >
                    Consult
                </Button>




            </div>


          

        );
    }
}

export default SearchCity;
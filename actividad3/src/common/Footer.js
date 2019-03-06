import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <Typography className="msg" variant="overline" gutterBottom>
            Weather in your city is brought to you by
          </Typography>
          <Typography variant="overline" gutterBottom>
            Ángel Cueto | Ana Sollano | Bruno Schalch
          </Typography>
      </div>
    );
  }
}

export default Footer;

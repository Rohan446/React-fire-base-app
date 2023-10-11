import React from 'react';
import { f, auth } from '../config/config.js';


class Root extends React.Component {
  state = {
    loggedIn: false,
  }

  constructor(props) {
    super(props);
    console.log("Into constructor");
    f.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        this.props.navigation.replace('Translations');
      }
      else {
        this.setState({ loggedIn: false });
        console.log("logged out");
        this.props.navigation.replace('Login');
      }
    });
  }
  render() {
    return null
  }
}

export default Root;

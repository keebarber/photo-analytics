import React, { Component } from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';
import UserInformation from './UserInformation';
import Images from './Images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div onClick={this.props.fetchData}>Click Me!</div>
        <UserInformation />
        <Images />
      </div>
    );
  }
}

const mapActionsToProps = {
	fetchData
};

export default connect(null, mapActionsToProps)(App);

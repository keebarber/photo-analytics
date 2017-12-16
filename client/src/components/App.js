import React, { Component } from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';
import UserInformation from './UserInformation';
import Images from './Images';
import MathFunctions from './MathFunctions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.fetchData}>Click Me!</button>
        <UserInformation />
        <MathFunctions />
        <Images />
      </div>
    );
  }
}

const mapActionsToProps = {
	fetchData
};

export default connect(null, mapActionsToProps)(App);

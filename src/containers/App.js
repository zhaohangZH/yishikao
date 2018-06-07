import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from '../components/Header/index';
import Bottom from '../components/Bottom/index';
import Home from '../containers/home';
import Login from './Login/Login';
import certificate from '../containers/Certificate';
import Recruit from '../containers/Recruit';
import Notice from '../containers/Notice';
import Download from '../containers/Download';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          {this.props.children}
        <Bottom/>
      </div>
    );
  }
}

export default App;

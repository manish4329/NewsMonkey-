import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import spinner from './components/spinner';

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="container" />
        <NavBar/>
        <spinner/>
        <News pageSize={5}/>
      </div>
    )
  }
}

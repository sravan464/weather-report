import React, { Component } from 'react';
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar/>
        </div>
    <div className="row">
        <WeatherList/>
    </div>
      </div>
    );
  }
}

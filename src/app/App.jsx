// @flow
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MapContainer from './MapContainer.js';
import MapControlsContainer from './MapControlsContainer.js';


type Props = {
}

class App extends Component<Props> {
  render() {
    return (
      <Router>
        <div className="fill-container">
          <MapControlsContainer className="floating-controls"></MapControlsContainer>
          <MapContainer className="fill-container"></MapContainer>
        </div>
      </Router>
    );
  }
}

export default App;

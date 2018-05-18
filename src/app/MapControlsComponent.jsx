// @flow
import React, { Component } from 'react';Component

type Props = {
}

class MapControlsComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-controls-container">
        <input placeholder="Left Map Url"/>
        <input placeholder="Right Map Url"/>
      </div>
    );
  }
}

export default MapControlsComponent;

// @flow
import React, { Component } from 'react';

type Props = {
}

function MapControlsComponent({
  leftUrl, rightUrl,
  setLeftUrl, setRightUrl
}) {
  return (
    <div className="map-controls-container">
      <input className="url-input" placeholder="Left Map Url"
             value={leftUrl}
             onBlur={setLeftUrl}/>
      <button className="toggle-button">Hide</button>
      <input className="url-input" placeholder="Right Map Url"
             value={rightUrl}
             onBlur={setRightUrl}/>
    </div>
  );
}

export default MapControlsComponent;

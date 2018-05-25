// @flow
import React, { Component } from 'react';
import MapboxGL from 'mapbox-gl';
import MapCompare from 'mapbox-gl-compare';
require('../../node_modules/mapbox-gl/dist/mapbox-gl.css');
require('../../node_modules/mapbox-gl-compare/dist/mapbox-gl-compare.css');

const basemapSources = {
    dark: {
        type: 'raster',
        tiles: ['https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png']
    },
    light: {
        type: 'raster',
        tiles: ['https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png']
    }
};
const basemapLayers = [{
    id: 'basemap',
    type: 'raster',
    source: 'light',
    tileSize: 256
}];

type Props = {
}

class MapComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      leftMap: null,
      rightMap: null,
      compare: null};
  }

  render() {
    return (
      <div className="map-container fill-container">
        <div id="left" className="map"></div>
        <div id="right" className="map"></div>
      </div>
    );
  }

  componentDidMount() {
    const leftMap = new MapboxGL.Map({
      container: 'left',
      style: {
        version: 8,
        sources: Object.assign({}, basemapSources),
        layers: basemapLayers.slice()
      },
      center: [0, 0],
      zoom: 0
    });
    const rightMap = new MapboxGL.Map({
      container: 'right',
      style: {
        version: 8,
        sources: Object.assign({}, basemapSources),
        layers: basemapLayers.slice()
      },
      center: [0, 0],
      zoom: 0
    });
    this.setState({
      leftMap,
      rightMap,
      compare: new MapCompare(leftMap, rightMap, {})
    })
  }

  componentDidUpdate(nextProps, nextState) {
    /* if (nextState.leftUrl) {
     * }
     * if (nextState.rightUrl)*/
  }
}

export default MapComponent;

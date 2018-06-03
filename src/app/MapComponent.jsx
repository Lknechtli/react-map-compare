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
  leftUrl: string,
  rightUrl: string
};

type State = {
  leftMap: ?MapboxGL.Map,
  rightMap: ?MapboxGL.Map,
  compare: ?MapCompare
}

class MapComponent extends Component<Props, State> {
  state = {
      leftMap: null,
      rightMap: null,
      compare: null
  };

  constructor(props: Props) {
    super(props);
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

  componentDidUpdate(nextProps: Props, nextState: State) {
    if (nextState.leftMap != null) {
      const leftMap = nextState.leftMap;
      if (nextProps.leftUrl != null) {
        const leftUrl = nextProps.leftUrl;
        if (leftMap.getSource('compare')) {
          leftMap.removeLayer('compare');
          leftMap.removeSource('compare');
        }
        leftMap.addSource('compare', {
          type: 'raster',
          tiles: [leftUrl]
        });
        leftMap.addLayer({
          id: 'compare',
          type: 'raster',
          source: 'compare',
          tileSize: 256
        });
        console.log("Left layer set");
      }
    }
    if (nextState.rightMap != null) {
      const rightMap = nextState.rightMap;
      if (nextProps.rightUrl != null) {
        const rightUrl = nextProps.rightUrl;
        if (rightMap.getSource('compare')) {
          rightMap.removeLayer('compare');
          rightMap.removeSource('compare');
        }
        rightMap.addSource('compare', {
          type: 'raster',
          tiles: [rightUrl]
        });
        rightMap.addLayer({
          id: 'compare',
          type: 'raster',
          source: 'compare',
          tileSize: 256
        });
        console.log("Right layer set");
      }
    }
  }
}

export default MapComponent;

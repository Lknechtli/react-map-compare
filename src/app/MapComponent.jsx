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

  // constructor(props: Props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="map-container fill-container">
        <div id="left" className="map"></div>
        <div id="right" className="map"></div>
      </div>
    );
  }

  componentDidMount(nextProps: any, nextState: any) {
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
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.leftMap != null) {
      const leftMap = this.state.leftMap;
      if (this.props.leftUrl != null && this.props.leftUrl.length && this.props.leftUrl !== prevProps.leftUrl) {
        const leftUrl = this.props.leftUrl;
        if (leftMap.getSource('compareL')) {
          leftMap.removeLayer('compareL');
          leftMap.removeSource('compareL');
        }
        leftMap.addSource('compareL', {
          type: 'raster',
          tiles: [leftUrl]
        });
        leftMap.addLayer({
          id: 'compareL',
          type: 'raster',
          source: 'compareL',
          tileSize: 256
        });
        console.log("Left layer set");
      }
    }

    if (this.state.rightMap != null) {
      const rightMap = this.state.rightMap;
      if (this.props.rightUrl != null && this.props.rightUrl.length && this.props.rightUrl !== prevProps.leftUrl) {
        const rightUrl = this.props.rightUrl;
        if (rightMap.getSource('compareR')) {
          rightMap.removeLayer('compareR');
          rightMap.removeSource('compareR');
        }
        rightMap.addSource('compareR', {
          type: 'raster',
          tiles: [rightUrl]
        });
        rightMap.addLayer({
          id: 'compareR',
          type: 'raster',
          source: 'compareR',
          tileSize: 256
        });
        console.log("Right layer set");
      }
    }
  }
}

export default MapComponent;

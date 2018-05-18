import { connect } from 'react-redux';
import MapComponent from './MapComponent.jsx';

import { operations } from './duck';

const mapStateToProps = (state) => {
  const { leftUrl, rightUrl } = state;
  return {
    leftUrl, rightUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  const updateLeftUrl = (url) => {
    dispatch(operations.updateLeftUrl(url));
  };

  const updateRightUrl = (url) => {
    dispatch(operations.updateRightUrl(url));
  };
  return {updateLeftUrl, updateRightUrl};
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;

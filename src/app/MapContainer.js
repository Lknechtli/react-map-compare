//@flow
import { connect } from 'react-redux';
import MapComponent from './MapComponent.jsx';

const mapStateToProps = (state) => {
  const { leftUrl, rightUrl } = state.app;
  return {
    leftUrl, rightUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;

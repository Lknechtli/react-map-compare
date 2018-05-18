import { connect} from 'react-redux';
import MapControlsComponent from './MapControlsComponent.jsx';

import { operations } from './duck';

const mapStateToProps = (state) => {
  const { leftUrl, rightUrl} = state;
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

const MapControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapControlsComponent);

export default MapControlsContainer;

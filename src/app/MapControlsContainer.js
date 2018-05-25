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
  const setLeftUrl = (url) => {
    dispatch(operations.setLeftUrl(url));
  };
  const setRightUrl = (url) => {
    dispatch(operations.setRightUrl(url));
  };
  return {setLeftUrl, setRightUrl};
};

const MapControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapControlsComponent);

export default MapControlsContainer;

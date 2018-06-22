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
  const setLeftUrl = (event) => {
    dispatch(operations.setLeftUrl(event.target.value));
  };
  const setRightUrl = (event) => {
    dispatch(operations.setRightUrl(event.target.value));
  };
  return {setLeftUrl, setRightUrl};
};

const MapControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapControlsComponent);

export default MapControlsContainer;

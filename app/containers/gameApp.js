import { bindActionCreators } from 'redux';
import { Game } from '../components/Game';
import actions from '../actions';
import { connect } from 'react-redux/native';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);

import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { getServerChannels } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
	
	return ({
		currentUser: state.entities.users[state.session.id],
		channels: Object.values(state.entities.channels)
	})
};

const mDTP = dispatch => ({
	getServerChannels: serverId => dispatch(getServerChannels(serverId))
}); 

export default connect(mSTP, mDTP)(ChannelIndex)
import { connect } from 'react-redux';

import App from '../../App/App';

import * as AppActionsDispatcher from './AppBehaviour';

export function mapStateToProps(state) {
  return {
    isLoading: state.app.isLoading,
    messages: state.app.messages,
  };
}

export default connect(mapStateToProps, AppActionsDispatcher)(App);


import { createAction, handleAction, handleActions } from 'redux-actions';
import api from './services';

const increment = createAction("INCREMENT", amount => amount);

const fetchGist = createAction("FETCH_GIST", () => api.gist());

export { increment, fetchGist }


import { createAction, handleAction, handleActions } from 'redux-actions';
import api from './services';

const increment = createAction("INCREMENT", amount => amount);

const fetchGist = createAction("FETCH_GIST", ()=>api.gist());

const fetchLicaiProducts = createAction("FETCH_LICAI_PRODUCTS", api.products);

export { increment, fetchGist, fetchLicaiProducts }

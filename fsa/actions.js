
import { createAction, handleAction, handleActions } from 'redux-actions';


const increment = createAction("INCREMENT", amount => amount);

export { increment }

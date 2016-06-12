
import { handleAction, handleActions } from 'redux-actions';

export default handleActions({
    INCREMENT: (state, action) => ({
        counter: state.counter + action.payload
    }),

    DECREMENT: (state, action) => ({
        counter: state.counter - action.payload
    }),

    FETCH_GIST: (state, action) => {
        gist: action.payload
    }
}, {counter: 0});

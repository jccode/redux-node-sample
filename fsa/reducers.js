
import { handleAction, handleActions } from 'redux-actions';

export default handleActions({
    INCREMENT: (state, action) => Object.assign(state, {
        counter: state.counter + action.payload
    }),

    DECREMENT: (state, action) => Object.assign(state, {
        counter: state.counter - action.payload
    }),

    FETCH_GIST: (state, action) => Object.assign(state, {
        gist: action.payload
    }),

    FETCH_LICAI_PRODUCTS: (state, action) => ({
        ...state,
        products: action.payload
    })

}, {counter: 0, gist: [], products: []});

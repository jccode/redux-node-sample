

import { increment, fetchGist, fetchLicaiProducts, addTodo } from './actions';
import configureStore from './configureStore'

const store = configureStore();

// console.log(store);
console.log(store.getState());

store.dispatch(increment(1));
store.dispatch(increment(2));

// console.log(store.getState());

// store.dispatch(fetchGist());
store.dispatch(fetchLicaiProducts(0));

console.log(' ~~~~~~~~~~~~~~~~~ ');
console.log(store.getState());



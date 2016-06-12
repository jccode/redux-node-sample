

import { increment, fetchGist } from './actions';
import configureStore from './configureStore'

/*
 console.log(increment(42));
console.log(reducer);

const store = createStore(reducer);
console.log(store);

console.log(store.getState());

let unsubscribe = store.subscribe(
    () => console.log( store.getState() )
);


store.dispatch(increment(1));
store.dispatch(increment(2));

unsubscribe();
*/



const store = configureStore();

// console.log(store);
console.log(store.getState());

store.dispatch(increment(1));
store.dispatch(increment(2));

console.log(store.getState());

store.dispatch(fetchGist());
console.log(store.getState());



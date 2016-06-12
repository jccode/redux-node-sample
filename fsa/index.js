
import { createStore } from 'redux';
import { increment } from './actions';
import reducer from './reducers';

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

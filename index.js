

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import store from './store';

console.log( store.getState() );


// log the state change
let unsubscribe = store.subscribe(
    () => console.log( store.getState() )
);


// dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// stop listening to state update
unsubscribe();



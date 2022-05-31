import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {


    //synchro
    //not mutate original state
    if (action.type === 'INC') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'DEC') {
        return { counter: state.counter - 1 }
    }
    if (action.type === 'Add') {
        return { counter: state.counter + action.payload }
    }
    if (action.type === 'Sub') {
        return { counter: state.counter - action.payload }
    }

    return state;

}
const store = createStore(reducerFn);

export default store;

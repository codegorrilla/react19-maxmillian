const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  //state is an object
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);
//console.log(store.getState());

//subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// store is an object,
// dispatch is a method which dispatches an action,
// action is an object
// where type is an identifier/ prop
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

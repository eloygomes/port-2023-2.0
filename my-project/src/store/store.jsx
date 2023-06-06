import { configureStore, combineReducers } from "@reduxjs/toolkit";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function navbarZindex(state = "show", action) {
  switch (action.type) {
    case "hide":
      return (state = "hide");
    case "show":
      return (state = "show");
    default:
      return state;
  }
}

function scrollBodyModalOn(state = "leave", action) {
  switch (action.type) {
    case "hold":
      return (state = "hold");
    case "leave":
      return (state = "leave");
    default:
      return state;
  }
}

const reducer = combineReducers({
  counterReducer: counterReducer,
  navbarZindex: navbarZindex,
  scrollBodyModalOn:scrollBodyModalOn,
});

const store = configureStore({
  reducer: reducer,
});

export default store;

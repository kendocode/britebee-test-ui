import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";
import Project from "./components/Project"


const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/project" component={Project} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

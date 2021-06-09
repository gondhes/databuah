import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from "./pages/Home"
import AddFruit from "./pages/AddFruit"
import EditFruit from "./pages/EditFruit"

import { Provider } from 'react-redux'
import store from './store/index'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/edit">
              <EditFruit />
            </Route>
            <Route path="/add">
              <AddFruit />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

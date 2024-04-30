import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PageSwitch from "./pages/PageSwitch"

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Provider store={store}>
          <PageSwitch />
        </Provider>
      </Router>
    </div>
  );
}

export default App;

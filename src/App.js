import React from "react";
import "./App.css";
import ToDoContainer from "./components/Wrapper/TodoContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoContainer></ToDoContainer>
      </div>
    </Provider>
  );
}

export default App;

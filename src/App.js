import React from "react";
import ReactDOM from "react-dom";

import ValidatedLoginForm from "./components/Login";

function App() {
  return (
    <div className="App">
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

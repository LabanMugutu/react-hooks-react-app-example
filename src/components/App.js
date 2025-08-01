

import React from "react";
import { format } from "date-fns";
import TestComponent from "./TestComponent";
import ExampleComponent from "./ExampleComponent"; 

function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent /> {/* ✅ Needed for test to pass */}
      <TestComponent />
    </div>
  );
}

export default App;

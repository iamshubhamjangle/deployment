import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState("Loading...");
  const url = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    console.log();
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;

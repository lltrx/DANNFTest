import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/")
      .then((response) => setTodos(response.data))
      .then(() => console.log("Data fetched successfully!"))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline text-teal-400">
        Hello world!
      </h1>
      <p className="text-lg text-gray-700">
        {todos ? todos : "Loading data..."}
      </p>
    </div>
  );
}

export default App;

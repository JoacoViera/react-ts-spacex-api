import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import ErrorPage from "./Pages/ErrorPage";
import Loader from "./Pages/Loader";
function App() {
  const { error, loading, data } = useFetch(
    "https://api.spacexdata.com/v4/rockets"
  );

  console.log("loading", loading);
  console.log("here", data);
  console.log("error", error);

  if (loading) return <Loader />;

  if (error) return <ErrorPage />;

  return (
    <div className="App">
      <h1>Hello Word</h1>
    </div>
  );
}

export default App;

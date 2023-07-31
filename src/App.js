import React from "react"
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import Jobs from "./components/Jobs"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/jobs" element={<Jobs/>} />
    </Routes>
  );
}

export default App;

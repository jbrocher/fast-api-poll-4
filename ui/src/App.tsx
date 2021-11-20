import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PollIndex from "routes/Poll";
import PollDetails from "routes/Poll/Details";

import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PollIndex />}></Route>
          <Route path=":questionId/" element={<div> Poll details </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

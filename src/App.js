import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import Exercises from "./pages/Exercises";
import Food from "./pages/Food";
import Goal from "./pages/Goal";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goal-tracker" element={<Goal />} />
      </Routes>
    </div>
  );
}

export default App;

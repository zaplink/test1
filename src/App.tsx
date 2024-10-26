import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dining from "./pages/Dining"
import Shopping from "./pages/Shopping"
import Workout from "./pages/Workout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dining" element={<Dining/>} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/Workout" element={<Workout/>} /> 
      </Routes>
    </Router>


  );
}
export default App;
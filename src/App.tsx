import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dining from "./pages/Dining"
import Shopping from "./pages/Shopping"
import Workout from "./pages/Workout";
import Summary from "./pages/Summary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dining" element={<Dining/>} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/Workout" element={<Workout/>} /> 
        <Route path="/Summary" element={<Summary/>} /> 
      </Routes>
    </Router>


  );
}
export default App;
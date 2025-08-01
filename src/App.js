import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <div className="bg-light min-vh-100">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

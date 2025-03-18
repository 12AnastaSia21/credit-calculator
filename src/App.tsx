import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TheButtonStart from "./TheButtonStart";
import TheDefaultPage from "./TheDefaultPage"

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<TheButtonStart />} />
        <Route path="/TheDefaultPage" element={<TheDefaultPage />} />
      </Routes>
    </Router>
  );
}
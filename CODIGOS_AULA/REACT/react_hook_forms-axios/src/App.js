import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home"
import { List } from "./pages/list"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />  
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;

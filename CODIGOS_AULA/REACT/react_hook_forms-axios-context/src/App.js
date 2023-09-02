import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home"
import { List } from "./pages/list"
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />  
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
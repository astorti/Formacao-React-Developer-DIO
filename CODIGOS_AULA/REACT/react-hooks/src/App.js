import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home"
import { UseStatePage } from "./pages/useState";
import { UseEffectPage } from "./pages/useEffect";
import { UseMemoPage } from "./pages/useMemo";
import { UseCallbackPage } from "./pages/useCallBack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
        <Route path="/usememo" element={<UseMemoPage />} />
        <Route path="/usecallback" element={<UseCallbackPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/index" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
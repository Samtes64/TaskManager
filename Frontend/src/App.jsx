import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskview from "./pages/Taskview";

function App() {
  return (
    <div className="bg-slate-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Taskview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

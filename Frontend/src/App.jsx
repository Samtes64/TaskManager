import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskview from "./pages/Taskview";
import NewList from "./pages/NewList"

function App() {
  return (
    <div className="bg-slate-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Taskview />} />
          <Route path="/newlist" element={<NewList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

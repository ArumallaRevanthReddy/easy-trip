import { Navigate, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <div className="text-white mx-4">
      <Routes>
        <Route path='booking' element={<Booking />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;

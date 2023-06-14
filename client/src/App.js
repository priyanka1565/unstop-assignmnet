import SeatBooking from './Components/SeatBooking';
import CreateSeat from './Components/CreateSeat';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/create-seat" element={< CreateSeat />}></Route>
        <Route path='/' element={<SeatBooking/>}></Route>
      </Routes>
    </BrowserRouter>
  
    
    
  );
}

export default App;

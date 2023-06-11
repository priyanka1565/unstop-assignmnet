import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SeatBooking from '../Pages/SeatBooking';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SeatBooking />}></Route>
      
    </Routes>
  );
}

export default AllRoutes
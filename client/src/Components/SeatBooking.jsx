import React, { useState } from 'react';
import "./SeatBooking.css"
import SeatPicker from "react-seat-picker";
import axios from 'axios';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const SeatBooking = () => {

  const [data, setData] = useState([]);
  const naviget = useNavigate();

  const getData = async () => {
    try {
      let url = `https://backend-unpstop.onrender.com/book-my-seat/get-seat`
      await axios.get(url).then((res) => {
        console.log(res?.data?.data, "res")
        if (res) {
          setData(res?.data?.data)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const bookSeat = async (seat_number) => {
    try {
      let url = "https://backend-unpstop.onrender.com/book-my-seat/book-seat";
      const config = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
      await axios.post(url, { seat_number: seat_number }, { headers: config }).then((res) => {
       if (res) {
         toast.success(res?.data?.message) 
       }
      }).catch((err) => {
        console.log(err)
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const handlechange = () => {
    naviget("/create-seat")
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div >
      <div>
        <h1>Online Seat Booking Application</h1>
        <button onClick={handlechange}>create seat</button>
      </div>
      <div className='container'>
        {data?.map((value) => {
          return (
            <div className='bookSeat' onClick={() => { bookSeat(value?.seat_number) }} >
              <div className='seat_book'><h3>{value?.seat_name}</h3></div>
              <h4>{ value?.seat_row}</h4>
            </div>
          )
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default SeatBooking
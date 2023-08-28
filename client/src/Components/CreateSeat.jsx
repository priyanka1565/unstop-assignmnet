import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./seat.css"
import axios from "axios"
const CreateSeat = () => {

    const formData = {
        seat_name: "",
        seat_number: "",
        seat_row: ""
    }

    const [getinput, Setinput] = useState(formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        Setinput({ ...getinput, [name]: value })
    };

    const craeteSeat = async () => {
        if (!getinput?.seat_name) {
            toast.error("Please Enter Seat Name")
        }
        else if (!getinput?.seat_number) {
            toast.error("Please Enter Seat Number")
        }
        else if (!getinput?.seat_row) {
            toast.error("Please Enter Seat Row Number")
        }
        else {
            try {
                let url = "https://backend-unpstop.onrender.com/book-my-seat/create-seat"
                const config = {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }

                axios.post(url, getinput, { headers: config }).then((res) => {
                    if (res) {
                        toast.success(res?.data?.message)
                    }
                }).catch((err) => {
                    console.log(err, "err")
                })
            }
            catch (err) {
                console.log(err, "err-cath")
            }
        }
    }
    console.log(getinput, "ssssss");
    return (
        <div>
            <div className="main_div">
                <div className="box">
                    <span className="bordreLine"></span>
                    <form >
                        <h2>Create Seat</h2>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='seat_name'
                                onChange={handleSubmit}
                                value={getinput?.seat_name}
                            />
                            <span>Seat Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="seat_number"
                                onChange={handleSubmit}
                                value={getinput?.seat_number}
                            />
                            <span>Seat Number</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name='seat_row'
                                onChange={handleSubmit}
                                value={getinput?.seat_row}
                            />
                            <span>Seat Row Number</span>
                            <i></i>
                        </div>
                        <button className='btn-1' type='button' onClick={craeteSeat}>Create Seat</button>
                    </form>

                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default CreateSeat
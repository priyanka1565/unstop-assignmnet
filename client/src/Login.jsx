import React, { useState } from "react";
const Login = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    c_pass: "",
  });

  
  

  // store input value using currying
  const handleChange = (filedName) => (event) => {
    const { value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [filedName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state) {
      let arr = JSON.parse(localStorage.getItem("data")) || [];
      arr.push(state);
      if (arr) {
        localStorage.setItem("data", JSON.stringify(arr));
      }
    }
  };

  console.log(state, "state");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          :Name
          <input
            type="text"
            placeholder="Enter Name"
            value={state.name}
            onChange={handleChange("name")}
          />
        </label>
        <label htmlFor="">
          :Email
          <input
            type="text"
            placeholder="Enter Email"
            value={state.email}
            onChange={handleChange("email")}
          />
        </label>
        <label htmlFor="">
          :Mobile
          <input
            type="text"
            placeholder="Enter Mobile"
            value={state.mobile}
            onChange={handleChange("mobile")}
          />
        </label>
        <label htmlFor="">
          :Password
          <input
            type="text"
            placeholder="Enter Name"
            value={state.password}
            onChange={handleChange("password")}
          />
        </label>
        <label htmlFor="">
          :Confirm Password
          <input
            type="text"
            placeholder="Enter Confirm Password"
            value={state.c_pass}
            onChange={handleChange("c_pass")}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

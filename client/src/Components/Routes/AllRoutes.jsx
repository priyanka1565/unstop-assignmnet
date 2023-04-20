import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserF from '../Pages/UserF'
import PostForm from '../Pages/PostForm';
import UserList from '../Pages/UserList';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserF />}></Route>
      <Route path="/postform" element={<PostForm />}></Route>
      <Route path="/userlist" element={<UserList />}></Route>
    </Routes>
  );
}

export default AllRoutes
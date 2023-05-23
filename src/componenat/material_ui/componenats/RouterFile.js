import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from './Register';
import Login from './Login';
import Home from './Home';


const RouterFile = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/home' element={<Home />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default RouterFile
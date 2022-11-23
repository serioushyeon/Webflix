import React from 'react';
import HomeScreen from "./components/main/HomeScreen";
import Login from "./components/sign/Login";
import Signup from "./components/sign/Signup";
import {Route, Routes} from 'react-router-dom';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
  </Routes>
);

export default App;

import React from 'react';
import HomeScreen from "./components/main/HomeScreen";
import Login from "./components/sign/Login";
import Signup from "./components/sign/Signup";
import {Route, Routes} from 'react-router-dom';
import './App.css';

const App = () => (
  <HomeScreen />
  // <Routes>
  //   <Route path="/" element={<Login />}/>
  //   <Route path="/signup" element={<Signup />}/>
  //   <Route path="/homescreen" element={<HomeScreen />} />
  // </Routes>
);

export default App;

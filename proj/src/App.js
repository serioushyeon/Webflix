import React from 'react';
import Search from "./components/details/Search";
import Profile from "./components/details/Profile";
import MyList from "./components/details/MyList";
import HomeScreen from "./components/main/HomeScreen";
import Login from "./components/sign/Login";
import Signup from "./components/sign/Signup";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/homescreen" element={<HomeScreen />} />
    <Route path="/mylist" element={<MyList />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);

export default App;

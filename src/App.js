import logo from './logo.svg';
import './App.css';
import React, { useNavigate, useState, useEffect, useParams, useLocation } from "react"
import { HashRouter as Router, Route, Routes, Navigate, Outlet, Link, NavLink, } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/NoteState';
import CurrentItem from './components/CurrentItem';

function App() {

  return (
    <>
      <NoteState>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="currentitem" element={<CurrentItem/>} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}


export default App;

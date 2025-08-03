import React from 'react';
import './index.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

const App = () => {
  return(
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;
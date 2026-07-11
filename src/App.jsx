import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import Calender from './pages/Calender';
import Notes from './pages/Notes';
import Profile from './pages/Profile';
import Register from './pages/Register';
import StudyRoom from './pages/StudyRoom';
import Tasks from './pages/Tasks';
import Footer from './components/Footer';
import Timer from './pages/Timer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />



      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2 p-0">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/study-room" element={<StudyRoom />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>

          </div>

        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

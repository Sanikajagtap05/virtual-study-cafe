import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Calender from "./pages/Calender";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import StudyRoom from "./pages/StudyRoom";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";

import background from "./assets/background.jpg";
import StudySession from "./pages/StudySession";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(255,248,240,.92),rgba(255,248,240,.92)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
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
                <Route path="/calendar" element={<Calender />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/study-room" element={<StudyRoom />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/studysession" element={<StudySession />} />
              </Routes>
            </div>
          </div>
        </div>
   <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
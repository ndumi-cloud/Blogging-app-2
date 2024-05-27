import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";

// Main App component
function App() {
  return (
    <div>
      <BrowserRouter basename="/blog11">
          <TopBar />
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/posts" element={<Homepage/>}/>
            <Route path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route path="/post/:id" element={<Single/>}/>
            <Route path="/write" element={<Write/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;




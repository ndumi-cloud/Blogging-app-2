import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (       
    <div>
      <BrowserRouter basename="/Blogging-app-2">
        <TopBar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Homepage searchQuery={searchQuery} />} />
          <Route path="/posts" element={<Homepage searchQuery={searchQuery} />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

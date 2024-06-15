import React, { useState, useContext} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import { Context } from "./context/Context";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(Context);

  return (       
    <div>
      <Router>
        <TopBar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Homepage searchQuery={searchQuery} />} />
          <Route path="/posts" element={<Homepage searchQuery={searchQuery} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

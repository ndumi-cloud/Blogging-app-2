import React, { useContext, useEffect } from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { Logout } from "../context/Actions";

export default function TopBar({ setSearchQuery }) {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/register"); // Redirect to the register page after logout
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Cleanup function to reset the searchQuery when the component unmounts
    return () => setSearchQuery("");
  }, [setSearchQuery]);

  return (
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="topListItem">
            <Link to={"/Settings"}>Settings</Link>
          </li>
          {!user && (
            <>
              <li className="topListItem">
                <Link to={"/Register"}>Register</Link>
              </li>
              <li className="topListItem">
                <Link to={"/Login"}>Login</Link>
              </li>
            </>
          )}
          <li className="topListItem">
            <Link to={"/write"}>Write</Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight"></div>
      <div className="container">
        <input
          type="text"
          className="searchbar"
          placeholder="Search..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
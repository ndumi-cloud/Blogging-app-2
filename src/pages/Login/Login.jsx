import axios from "../../axios";
import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { Logout } from "../../context/Actions";
import "./Login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const handleLogout = () => {
    dispatch(Logout());
    // Optionally, you can navigate to a specific route after logout
    // navigate("/");
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
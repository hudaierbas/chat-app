import React, { useState, useRef } from "react";
import "./App.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Login() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <div className="login">
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <div>
        Already have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;

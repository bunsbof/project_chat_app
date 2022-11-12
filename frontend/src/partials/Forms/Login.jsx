import React, { useState, useEffect } from "react";
import axios from "axios";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {};

  return (
    <>
      <form>
        <h1>Sign in</h1>
        <div className="social-container">
          <a className="social">
            <TfiFacebook />
          </a>
          <a className="social">
            <TfiGoogle />
          </a>
          <a className="social">
            <TfiLinkedin />
          </a>
        </div>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a>Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default Login;
